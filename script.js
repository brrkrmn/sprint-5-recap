const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

form.addEventListener("submit", createTask);

function createTask(event) {
    event.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    const item = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', completeTask);

    const label = document.createElement('label');
    label.textContent = text;

    item.appendChild(checkbox);
    item.appendChild(label);
    list.appendChild(item);

    input.value = '';
    input.focus();
    toggleButton();
}

const button = form.querySelector('button');
input.addEventListener("input", toggleButton);

function toggleButton() {
    button.disabled = input.value.trim().length === 0;
}

function completeTask(event) {
    const item = event.target.parentElement;
    list.removeChild(item);
}