const tasks = [
    { question: "Скільки буде 5 + 3?", answer: 8, class: 1 },
    { question: "Скільки буде 12 - 7?", answer: 5, class: 2 },
    { question: "Обчисліть 3 * 4.", answer: 12, class: 3 },
];

const tasksContainer = document.getElementById('tasks');

tasks.forEach(task => {
    const taskElement = document.createElement('div');
    taskElement.innerHTML = `<strong>Клас ${task.class}:</strong> ${task.question}`;
    tasksContainer.appendChild(taskElement);
});
