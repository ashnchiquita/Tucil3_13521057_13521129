

export class Position {
    private x: number;
    private y: number;

    constructor(x: number, y: number) { this.x = x; this.y = y; }

    getX(): number { return this.x; }
    getY(): number { return this.y; }
    setX(x: number) { this.x = x; }
    setY(y: number) { this.y = y; }
    getDistance(other: Position): number {
        let R = 3958.8;

        // Converting to radians
        let rlat1 = this.x * (Math.PI/180);
        let rlat2 = other.getX() * (Math.PI/180);
      
        // Radian Difference Latitde and Longitudes
        let difflat = rlat2 - rlat1;
        let difflon = (other.getY() - this.y)* (Math.PI/180);
      
        // Distance
        let d = (2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)))) * 1609.34;
        return d;
    }
    getPosArr(): [number, number] {
        return [this.x, this.y];
    }
    toString(): string { return `(${this.x}, ${this.y})`; }
}
