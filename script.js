document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const datetimeInput = document.getElementById("datetimeInput");
  const addBtn = document.getElementById("addBtn");
  const tasksContainer = document.getElementById("tasksContainer");

  const tagClasses = ["pink", "blue", "yellow"];

  addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    const datetimeValue = datetimeInput.value;

    if (taskText === "" || datetimeValue === "") return;

    const taskTime = formatDateTime(datetimeValue);
    const randomTag = tagClasses[Math.floor(Math.random() * tagClasses.length)];

    const newTask = document.createElement("div");
    newTask.classList.add("task", randomTag);

    newTask.innerHTML = `
      <span>${taskText}</span>
      <span class="time">${taskTime}</span>
    `;

    newTask.addEventListener("click", () => {
      newTask.classList.toggle("completed");
    });

    tasksContainer.appendChild(newTask);

    taskInput.value = "";
    datetimeInput.value = "";
  });

  function formatDateTime(input) {
    const date = new Date(input);
    const hours = date.getHours() % 12 || 12;
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = date.getHours() >= 12 ? "pm" : "am";
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    return `${month} ${day}, ${hours}:${minutes} ${ampm}`;
  }
});
