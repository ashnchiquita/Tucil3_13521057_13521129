import { Position } from './Position';

export class Node {
    private coordinate: Position;
    private visited: boolean = false;
    private name: string;
    private id: number;
    private static numberOfNodes: number = 0;

    constructor(coordinate: Position, name: string = `Node ${Node.numberOfNodes}`) {
        this.coordinate = coordinate;
        this.id = Node.numberOfNodes;
        this.name = name;
        Node.numberOfNodes++;
    }

    getCoordinate(): Position { return this.coordinate; }
    isVisited(): boolean { return this.visited; }
    getId(): number { return this.id; }
    getName(): string { return this.name; }
    setVisited(visited: boolean): void { this.visited = visited; }
    setCoordinate(coordinate: Position): void { this.coordinate = coordinate; }
    setName(name: string): void { this.name = name; }
    resetVisited(): void { this.visited = false; }
    static getNumOfNodes(): number { return Node.numberOfNodes; }
    static resetNumOfNodes(): void { Node.numberOfNodes = 0; }
    toString(): string { return `id         : ${this.id}\nname       : ${this.name}\nvisited    : ${this.visited}\ncoordinate : ${this.coordinate.toString()}`; }
}
