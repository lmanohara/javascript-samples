import { Stack } from "/stack.js";

const stack = new Stack();

const inputValue = document.getElementById('inputTxtBx');
const pushBtn = document.getElementById('pushBtn');
const popBtn = document.getElementById('popBtn');
const peekBtn = document.getElementById('peekBtn');
const showElements = document.getElementById('showElements');

pushBtn.addEventListener('click', () => {
    stack.push(inputValue.value);
    inputValue.value = '';
});

popBtn.addEventListener('click', () => {
    stack.pop();
});

peekBtn.addEventListener('click', () => {
    showElements.value = stack.peek;
});
