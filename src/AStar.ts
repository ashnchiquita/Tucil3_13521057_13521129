let matrix;
let node = new Map();

// User defined class
// to store element and its priority
class QElement {
    public node: number;
    public priority: number;

    constructor(element, priority) {
        this.node = element;
        this.priority = priority;
    }
}

// PriorityQueue class
class PriorityQueue {
    private items: QElement[];

    // An array is used to implement priority
    constructor() {
        this.items = [];
    }

    // enqueue function to add element
    // to the queue as per priority
    enqueue(node, priority) {
        // creating object from queue element
        var qElement = new QElement(node, priority);
        var contain = false;

        // iterating through the entire
        // item array to add element at the
        // correct location of the Queue
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].priority < qElement.priority) {
                // Once the correct location is found it is
                // enqueued
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }

        // if the element have the highest priority
        // it is added at the end of the queue
        if (!contain) {
            this.items.push(qElement);
        }
    }

    // dequeue method to remove
    // element from the queue
    dequeue() {
        // return the dequeued element
        // and remove it.
        // if the queue is empty
        // returns Underflow
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }

    // front function
    front() {
        // returns the highest priority element
        // in the Priority queue without removing it.
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }

    // isEmpty function
    isEmpty() {
        // return true if the queue is empty.
        return this.items.length == 0;
    }
}


function searchAStar(start, finish) {
    let queue = new PriorityQueue();
    let path: QElement[]

}