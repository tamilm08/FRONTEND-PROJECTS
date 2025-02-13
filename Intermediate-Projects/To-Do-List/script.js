document.addEventListener("DOMContentLoaded", loadTasks);
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") addTask();
});

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskDate = document.getElementById("taskDate");
    const taskPriority = document.getElementById("taskPriority");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value.trim();
    const dueDate = taskDate.value;
    const priority = taskPriority.value;

    if (taskText === "") return;

    const li = document.createElement("li");
    li.className = "flex justify-between items-center bg-gray-100 p-2 rounded-lg shadow-sm cursor-pointer";
    li.innerHTML = `
        <div>
            <span class="text-gray-700 font-medium">${taskText}</span>
            <span class="text-sm text-gray-500 ml-2">(Due: ${dueDate || "No Date"})</span>
            <span class="ml-2 text-xs font-semibold text-${priorityColor(priority)}">${priority}</span>
        </div>
        <div>
            <button onclick="editTask(this)" class="text-blue-500 hover:text-blue-700 px-2">✎</button>
            <button onclick="removeTask(this)" class="text-red-500 hover:text-red-700">✖</button>
        </div>
    `;

    taskList.appendChild(li);
    saveTasks();
    taskInput.value = "";
    taskDate.value = "";
    taskPriority.value = "Low";
}

function removeTask(button) {
    button.closest("li").remove();
    saveTasks();
}

function editTask(button) {
    const li = button.closest("li");
    const textSpan = li.querySelector("span:first-child");
    const newText = prompt("Edit task:", textSpan.textContent);
    if (newText) {
        textSpan.textContent = newText;
        saveTasks();
    }
}

function priorityColor(priority) {
    return priority === "High" ? "red-500" : priority === "Medium" ? "yellow-500" : "green-500";
}

function saveTasks() {
    const tasks = [...document.querySelectorAll("#taskList li")].map(li => {
        return {
            text: li.querySelector("span:first-child").textContent,
            date: li.querySelector("span:nth-child(2)").textContent.replace("(Due: ", "").replace(")", ""),
            priority: li.querySelector("span:nth-child(3)").textContent
        };
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => {
        document.getElementById("taskInput").value = task.text;
        document.getElementById("taskDate").value = task.date !== "No Date" ? task.date : "";
        document.getElementById("taskPriority").value = task.priority;
        addTask();
    });
}

// Enable Drag & Drop
new Sortable(document.getElementById("taskList"), {
    animation: 150,
    onEnd: saveTasks
});
