document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("add-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function createTaskItem(text) {
    const li = document.createElement("li");
    li.className = "task-item";

    const customCheckbox = document.createElement("div");
    customCheckbox.className = "custom-checkbox";

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = text;

    const content = document.createElement("div");
    content.className = "task-content";
    content.appendChild(customCheckbox);
    content.appendChild(span);

    customCheckbox.addEventListener("click", () => {
      customCheckbox.classList.toggle("checked");
      li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(content);
    li.appendChild(deleteBtn);
    return li;
  }

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    const taskItem = createTaskItem(taskText);
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }

  addBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
  });
});
