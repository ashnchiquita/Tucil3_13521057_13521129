export class Path {
    private pathList: Array<number> = [];
    private Gn: number = 0;
    private Hn: number = 0;

    constructor() {}

    add(node: number, GnDiff: number = 0, newHn: number = 0): void {
        this.pathList.push(node);
        if (this.pathList.length != 0) {
            this.Gn += GnDiff;
        }
        this.Hn = newHn;
    }

    getLast(): number { return this.pathList[this.pathList.length - 1]; }
    getAt(index: number): number { return this.pathList[index]; }
    getPrio(): number { return this.Gn + this.Hn; }
    getPathLength(): number{ return this.pathList.length; }
    clone(): Path {
        let newPath = new Path();
        newPath.Gn = this.Gn;
        newPath.Hn = this.Hn;
        this.pathList.forEach(num =>
            { newPath.pathList.push(num); }
        );
        return newPath;
    }

    toString(): string {
        return `[${this.pathList.toString()} <${this.Gn}>]`;
    }
}
