import { Path } from './Path'

export class PriorityQueue {
    // Makin kecil priority, makin penting
    private queue: Array<Path> = [];

    constructor() {}

    enqueue(path: Path): void {
        let pathPrio = path.getPrio();
        let found = false;

        for (let i = 0; i < this.queue.length; i++) {
            if (this.queue[i].getPrio() > pathPrio) {
                this.queue.splice(i, 0, path);
                found = true;
                break;
            }
        }

        if (!found) {
            this.queue.push(path);
        }
    }

    dequeue(): Path { return this.queue.shift() !; }
    isEmpty(): boolean { return this.queue.length == 0; }
    getLength(): number { return this.queue.length; }
    getAt(i: number): Path { return this.queue[i]; }

    toString(): string {
        let result: string = `{`;
        this.queue.forEach(path => {
            result += path.toString();
            result += " ";
        });
        result += `}`;
        return result;
    }
}
