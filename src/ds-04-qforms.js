class Stack {
    constructor() {
        this.data = [];
    }

    push(item) {
        this.data.push(item)
    }

    pop() {
        return this.data.pop()
    }

    peek() {
        return this.data[this.data.length - 1];
    }

}


class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record) {
        this.first.push(record);
    }

    remove() {

        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }

        const record = this.second.pop();

        while (this.second.peek()) {
            this.first.push(this.second.pop())
        }

        return record;
    }

    peek() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }

        const record = this.second.peek();

        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }

        return record;
    }
}
