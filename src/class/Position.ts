export class Position {
    private x: number;
    private y: number;

    constructor(x: number, y: number) { this.x = x; this.y = y; }

    getX(): number { return this.x; }
    getY(): number { return this.y; }
    setX(x: number) { this.x = x; }
    setY(y: number) { this.y = y; }
    getDistance(other: Position): number {
        return Math.sqrt((other.x - this.x) * (other.x - this.x) + (other.y - this.y) * (other.y - this.y));
    }
    toString(): string { return `(${this.x}, ${this.y})`; }
}
