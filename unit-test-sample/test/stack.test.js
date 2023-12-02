class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    get peek() {
        return this.items[this.top];
    }

    push(value) {
        this.top += 1;
        this.items[this.top] = value;
    }

    pop() {
        this.items[this.top] = null;
        this.top -= 1;
    }
}


describe('Testing stack', () => {

    let stack;

    beforeEach(() => {
        stack = new Stack();
    })

    it('is created empty', () => {

        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});

    });

    it('can push item to the stack', () => {
        stack.push('itemA');

        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('itemA')
    });

    it('can pop item from the stack', () => {

        stack.push('itemA');
        stack.push('itemB');
        stack.pop();

        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('itemA');
    });

    it.todo('undefined error cases');
});