
document.addEventListener("DOMContentLoaded", loadTasks);
document.getElementById("taskInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") addTask();
});

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    // Prevent duplicate tasks
    if ([...taskList.children].some(li => li.textContent.includes(taskText))) {
        alert("Task already exists!");
        return;
    }

    const li = document.createElement("li");
    li.className = "flex justify-between items-center bg-gray-100 p-2 rounded-lg shadow-sm";
    li.innerHTML = `
        <span class="text-gray-700">${taskText}</span>
        <button onclick="removeTask(this)" class="!text-red-500 hover:!text-red-700">✖</button>
    `;

    taskList.appendChild(li);
    saveTasks();
    taskInput.value = "";
    taskInput.focus();
}

function removeTask(button) {
    button.parentElement.remove();
    saveTasks();
}

function saveTasks() {
    const tasks = [...document.querySelectorAll("#taskList li span")].map(span => span.textContent);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(taskText => {
        const taskInput = document.getElementById("taskInput");
        taskInput.value = taskText;
        addTask();
    });
}
