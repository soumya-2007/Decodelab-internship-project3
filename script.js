let count = 0;

const countDisplay =
document.getElementById("count");

const incrementBtn =
document.getElementById("increment");

const decrementBtn =
document.getElementById("decrement");

const resetBtn =
document.getElementById("reset");

function updateCount() {
countDisplay.textContent = count;
}

incrementBtn.addEventListener("click", () => {
    count++;

    updateCount();

    showNotification(
"Counter Increased ✅"
    );
});

decrementBtn.addEventListener("click", () => {
    count--;

    updateCount();

    showNotification(
    "Counter Decreased ⚠️"
    );
}
);

resetBtn.addEventListener(
"click",
() => {
    count = 0;

    updateCount();

    showNotification(
    "Counter Reset 🔄"
    );
}
);
const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
document.body.classList.toggle("dark");
});
const taskInput =
  document.getElementById("taskInput");

const addTaskBtn =
  document.getElementById("addTask");

const taskList =
  document.getElementById("taskList");

addTaskBtn.addEventListener(
  "click",
  addTask
);

// ENTER KEY SUPPORT

taskInput.addEventListener(
  "keypress",
  function(e) {

    if(e.key === "Enter") {
      addTask();
    }

  }
);

// ADD TASK

function addTask() {

  const taskText =
    taskInput.value.trim();

  if(taskText === "") {

    showNotification(
      "Please enter a task ❌"
    );

    return;
  }

  createTask(taskText);

  taskInput.value = "";

  showNotification(
    "Task Added Successfully ✅"
  );
}



function createTask(taskText) {

  const li =
    document.createElement("li");

  li.innerHTML = `
    <span>${taskText}</span>

    <button class="delete-btn">
      Delete
    </button>
  `;

  const deleteBtn =
    li.querySelector(".delete-btn");

  deleteBtn.addEventListener(
    "click",
    () => {

      li.remove();

      saveTasks();

      showNotification(
        "Task Deleted 🗑️"
      );
    }
  );

  taskList.appendChild(li);

  saveTasks();
}



function saveTasks() {

  const tasks = [];

  document
    .querySelectorAll("#taskList li span")
    .forEach((task) => {

      tasks.push(task.textContent);

    });

  localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
  );
}



window.addEventListener(
  "DOMContentLoaded",
  () => {

    const savedTasks =
      JSON.parse(
        localStorage.getItem("tasks")
      ) || [];

    savedTasks.forEach((task) => {
      createTask(task);
    });

  }
);

let score = 0;

const scoreDisplay =
  document.getElementById("score");

const increaseScoreBtn =
  document.getElementById("increaseScore");

increaseScoreBtn.addEventListener(
  "click",
  () => {

    score += 10;

    scoreDisplay.textContent = score;

    showNotification(
      "Score Updated 🎯"
    );
  }
);

const notification =
  document.getElementById("notification");

function showNotification(message) {

  notification.textContent = message;

  setTimeout(() => {

    notification.textContent =
      "No Notifications";

  }, 3000);
}

function updateClock() {

  const clock =
    document.getElementById("clock");

  const now = new Date();

  clock.textContent =
    now.toLocaleTimeString();
}

setInterval(updateClock, 1000);

updateClock();




