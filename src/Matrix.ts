class Edge {
    public jalan: string;
    public jarak: number;

    constructor(jalan, jarak) {
        this.jarak = jarak;
        this.jalan = jalan;
    }

    isConnected() {
        return !(this.jalan === "X" && this.jarak === 0);
    }
}

class pos {
    x: number;
    y: number;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Matrix {
    public n: number;
    public mat: Edge[][];

    // tinggal read dr file
    constructor(nNodes: number) {
        this.n = nNodes;
        for (var i = 0; i < this.n; i++) {
            this.mat[i] = [];
            for (var j = 0; j < this.n; j++) {
                this.mat[i][j] = new Edge("X", 0);
            }
        }
    }
}