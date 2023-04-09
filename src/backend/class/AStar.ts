let matrix;
let node = new Map();
node.set(1, new pos(1, 1))

function eucDis(node1: number, node2: number) {
    let x1 = node[node1].x
    let x2 = node[node2].X

    let y1 = node[node1].y
    let y2 = node[node2].y

    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

function searchAStar(start: number, finish: number) {
    let checkedNode = new Array<number>();
    let queue = new PriorityQueue();
    let path = new NodePath();

    path.addAStar(start, eucDis(start, start))
    queue.enqueue(path);
    while (!queue.isEmpty()) {
        let currPath = queue.dequeue();
        let currNode;
        if (currPath != undefined) {
            currNode = currPath.getLast();
        }

        if (checkedNode.includes(currNode)) {
            continue;
        }

        checkedNode.push(currNode)

        if (currNode == finish) {
            return currPath;
        }

        for (let i = 0; i < matrix[0].length; i++) {
            if (matrix[currNode][i].getjalan() != "X" && !checkedNode.includes(i)) {
                let newPath = currPath;
                if (newPath != undefined) {
                    newPath.addAStar(i, finish);
                }
                queue.enqueue(newPath);
            }
        }
    }
}