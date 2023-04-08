// read 9 line pertama
nodes = {0:(1,3), 1:(4.1,0),2:(-1,2),3:(-3,-5.2),4:(8,9.5),5:(9.2,-4),6:(3.1,5.1),7:(-4,-5)}

class edges {
    string jalan;
    double jarak;

    constructor () {
        this.jarak = 0;
        this.jalan = "X";
    }
    constructor (jalan,jarak) {
        this.jarak = jarak;
        this.jalan = jalan;
    }
}

edges matrix [8][8] = new edges[8][8];

for (int i = 0; i < 8; i++) {
    for (int j = 0; j < 8; j++) {
        if (parsed = "X") {
            matrix[i][j] = new edges();
        } else {
            matrix[i][j] = new edges(parsed, eucliddist(nodes[j], nodes[i]));
        }
    }
}
