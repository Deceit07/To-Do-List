const taskList = document.getElementById("taskList");
const remainingCount = document.getElementById("remainingCount");

function addTask() {
  const taskText = document.getElementById("taskInput").value;
  const taskTime = document.getElementById("taskTime").value;

  if (taskText.trim() === '') return;

  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onchange = updateCount;

  const span = document.createElement("span");
  span.textContent = taskText;

  const dateTimeInfo = document.createElement("div");
  dateTimeInfo.className = "task-info";
  dateTimeInfo.textContent = taskTime ? `Due: ${new Date(taskTime).toLocaleString()}` : '';

  const taskLeft = document.createElement("div");
  taskLeft.className = "task-left";
  taskLeft.appendChild(span);
  taskLeft.appendChild(dateTimeInfo);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "\u00D7";
  deleteBtn.onclick = () => {
    li.remove();
    updateCount();
  };

  li.appendChild(checkbox);
  li.appendChild(taskLeft);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  document.getElementById("taskInput").value = '';
  document.getElementById("taskTime").value = '';

  updateCount();
}

function updateCount() {
  const allTasks = taskList.querySelectorAll("li");
  let remaining = 0;
  allTasks.forEach(task => {
    if (!task.querySelector("input").checked) {
      remaining++;
      task.classList.remove("completed");
    } else {
      task.classList.add("completed");
    }
  });
  remainingCount.textContent = `Your remaining todos : ${remaining}`;
}
