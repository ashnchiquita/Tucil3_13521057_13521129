import { Edge } from './Edge';
import { Node } from './Node';
import { Position } from './Position';
import { Path } from './Path';
import { PriorityQueue } from './PriorityQueue';

export class GraphMatrix {
    private nodes: { [key: number]: Node } = {};
    private mat: Edge[][] = [];
    private length: number;

    constructor(allFileContents: string) {
        let allLines = allFileContents.split(/\r?\n/);
        this.length = + allLines[0];

        // create nodes dictionary
        for (var i = 0; i < this.length; i++) {
            let currPos = allLines[i + 1].split(' ')
            if (currPos.length == 3) {
                this.nodes[i] = new Node(new Position(+ currPos[1], + currPos[2]), currPos[0]);
            } else if (currPos.length == 2) {
                this.nodes[i] = new Node(new Position(+ currPos[0], + currPos[1]));
            } else {
                throw new Error("Invalid file");
            }
        }

        // create adjacency matrix
        let offset = 1 + this.length;
        for (var i = 0; i < this.length; i++) {
            this.mat[i] = [];
            let currJalan = allLines[offset + i].split('|');
            for (var j = 0; j < this.length; j++) {
                let eucDist: number = this.nodes[i].getCoordinate().getDistance(this.nodes[j].getCoordinate());
                this.mat[i][j] = new Edge(currJalan[j], eucDist);
            }
        }
    }

    resetAllVisisted(): void {
        for (var i = 0; i < this.length; i++) {
            this.nodes[i].resetVisited();
        }
    }

    getListEdges(): Edge[] {
        let list = new Array<Edge>();
        for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < this.length; j++) {
                if (this.mat[i][j].isConnected()) {
                    list.push(this.mat[i][j]);
                }
            }
        }
        return list;
    }

    getUnvisitedNeighbors(i: number): Array<number> {
        let neighbors = new Array<number>();
        for (var j = 0; j < this.length; j++) {
            if (!this.nodes[j].isVisited() && this.mat[i][j].isConnected()) {
                neighbors.push(j);
            }
        }
        return neighbors;
    }

    getLength(): number { return this.length; }
    searchUCS(start: number, finish: number): Path {
        this.resetAllVisisted();

        // inisialisasi
        let queue: PriorityQueue = new PriorityQueue();
        let startPath: Path = new Path();
        startPath.add(start);
        queue.enqueue(startPath.clone());

        while (!queue.isEmpty()) {
            let currPath = queue.dequeue();
            let currNum = currPath.getLast();

            if (currNum == finish) {
                this.nodes[currNum].setVisited(true);
                return currPath;
            } else if (!this.nodes[currNum].isVisited()) {
                let neighbors = this.getUnvisitedNeighbors(currNum);
                this.nodes[currNum].setVisited(true);

                neighbors.forEach(num => {
                    let childPath: Path = currPath.clone();
                    let currGnDiff = this.mat[currPath.getLast()][num].getDist();
                    childPath.add(num, currGnDiff);
                    queue.enqueue(childPath);
                })
            }
        }
        throw new Error("Could not find path");
    }

    searchAStar(start: number, finish: number): Path {
        this.resetAllVisisted();

        // inisialisasi
        let queue: PriorityQueue = new PriorityQueue();
        let startPath: Path = new Path();
        startPath.add(start);
        queue.enqueue(startPath.clone());

        while (!queue.isEmpty()) {
            let currPath = queue.dequeue();
            let currNum = currPath.getLast();

            if (this.nodes[currNum].isVisited()) {
                continue;
            }

            this.nodes[currNum].setVisited(true);

            if (currNum == finish) {
                return currPath;
            } else {
                let neighbors = this.getUnvisitedNeighbors(currNum);

                neighbors.forEach(num => {
                    let childPath: Path = currPath.clone();
                    let currGnDiff = this.mat[currPath.getLast()][num].getDist();
                    let currHnDiff = this.nodes[num].getCoordinate().getDistance(this.nodes[finish].getCoordinate())
                    childPath.add(num, currGnDiff, currHnDiff);
                    queue.enqueue(childPath);
                })
            }

        }
        throw new Error("Could not find path");
    }

    getNodeMap() {
        return this.nodes;
    }

    getEdges() { return this.mat; }

    toString(): string {
        let result = `Nodes Dictionary:\n`;
        for (let i = 0; i < this.length; i++) {
            result += this.nodes[i].toString();
            result += `\n------------------------\n`;
        }
        result += `\nAdjacency Matrix:\n`;
        for (var i = 0; i < this.length; i++) {
            for (var j = 0; j < this.length; j++) {
                result += this.mat[i][j].toString();
                result += ` `;
            }
            result += `\n`;
        }
        return result;
    }

    getPolyline(path: Path): Array<Position> {
        let polyline: Array<Position> = [];
        for (var i = 0; i < path.getPathLength(); i++) {
            polyline.push(this.nodes[path.getAt(i)].getCoordinate());
        }
        return polyline;
    }

    getPolylineName(path: Path): string {
        let polyline: string = ``;
        for (var i = 0; i < path.getPathLength(); i++) {
            polyline += this.nodes[path.getAt(i)].getName();
            polyline += ' ';
        }
        return polyline;
    }

    getAllPolyLine(): Array<Array<[number, number]>> {
        let polyline: Array<Array<[number, number]>> = [];

        for (let i = 0; i < this.length; i++) {
            let currline: Array<[number, number]> = [];
            for (let j = 0; j < this.length; j++) {
                if (this.mat[i][j].isConnected()) {
                    currline.push(this.nodes[i].getCoordinate().getPosArr());
                    currline.push(this.nodes[j].getCoordinate().getPosArr());
                }
            }
            polyline.push(currline);
        }
        return polyline;
    }

    getPolylineArr(path: Path): Array<Array<[number, number]>> {
        let polyline: Array<Array<[number, number]>> = [];
        for (var i = 0; i < path.getPathLength()-1; i++) {
            let currPos: Array<[number, number]> = [];
            currPos.push(this.nodes[path.getAt(i)].getCoordinate().getPosArr());
            currPos.push(this.nodes[path.getAt(i+1)].getCoordinate().getPosArr());
            polyline.push(currPos);
        }
        return polyline;
    }
}
