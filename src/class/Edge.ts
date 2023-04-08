export class Edge {
    private street: string;
    private dist: number;

    constructor(street: string, dist: number) { this.dist = dist; this.street = street; }

    getStreet(): string { return this.street; }
    getDist(): number { return this.dist; }
    setStreet(street: string): void { this.street = street; }
    setDist(dist: number): void { this.dist = dist; }
    toString(): string { return `[${this.street}, ${Math.round(this.dist)}]`; }

    isConnected(): boolean { return !(this.street === "X"); }
}
