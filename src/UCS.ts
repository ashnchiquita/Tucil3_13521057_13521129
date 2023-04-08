function UCS(start: number, finish: number) {
    let nodePaths = new PriorityQueue();
    let startPath = new NodePath();
    let checkedNode = new Array<number>();
    let numOfNodes = 8;
    let currOpt = new NodePath();

    startPath.addUCS(start);
    nodePaths.enqueue(startPath);

    while (!nodePaths.isEmpty() || checkedNode.length != numOfNodes) {
        let currPath = nodePaths.dequeue();
        let currNode;
        if (currPath != undefined) {
            currNode = currPath.getLast();
        }

        if (currNode == finish) {
            if (currPath.getPrio() < currOpt.getPrio()) {
                currOpt = Object.assign([], currPath);
            }
        } else if (checkedNode.includes(currNode)) {
            continue;
        } else {
            checkedNode.push(currNode);
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

    if (currOpt.getPathLength() == 0) {
        throw new Error("Cannot reach finish");
    } else {
        return currOpt;
    }
}