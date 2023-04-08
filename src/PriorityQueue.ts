class NodePath {
    public pathList: Array<number> = [1];
    public Gn: number = 0;
    public Hn: number = 0;

    constructor() { }

    addUCS(node: number) {
        this.pathList.push(node);
        if (this.pathList.length != 0)
            this.Gn += matrix[this.pathList[this.pathList.length - 1], node];
    }

    addAStar(node: number, finish: number) {
        this.pathList.push(node);
        if (this.pathList.length != 0) {
            this.Gn += matrix[this.pathList[this.pathList.length - 1], node];
        }
        this.Hn = eucDis(node, finish)
    }

    getLast() {
        return this.pathList[this.pathList.length - 1];
    }

    getPrio() {
        return this.Gn + this.Hn;
    }

    getPathLength() {
        return this.pathList.length;
    }
}

class PriorityQueue {
    private queue = new Array<NodePath>();

    constructor() {
        this.queue = [];
    }

    enqueue(path) {
        let pathPrio = path.getPrio();
        let found = false;

        for (let i = 0; i < this.queue.length; i++) {
            if (this.queue[i].getPrio() < pathPrio) {
                this.queue.splice(i, 0, path);
                found = true;
                break;
            }
        }

        if (!found) {
            this.queue.push(path);
        }
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length == 0;
    }

    getLength() {
        return this.queue.length;
    }

    getAt(i: number) {
        return this.queue[i];
    }
}