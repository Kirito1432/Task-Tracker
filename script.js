const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  const task = inputBox.value.trim();

  //If the task is empty
  if (!task) {
    alert("Please write the description for a task");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
  <label>
    <input type="checkbox">
    <span>${task}</span>
  </label>
  <span class="edit-btn">Edit</span>
  <span class="delete-btn">Delete</span>
`;

  listContainer.appendChild(li);
  updateCounters()

  //Reset the input box
  inputBox.value = "";

  const checkBox = li.querySelector("input");
  const editBtn = li.querySelector(".edit-btn");
  const taskSpan = li.querySelector("span");
  const deleteBtn = li.querySelector(".delete-btn");

  checkBox.addEventListener("click", function () {
    li.classList.toggle("complete", checkBox.checked);

    updateCounters();
  });

  editBtn.addEventListener("click", function () {
    const update = prompt("Edit task: ", taskSpan.textContent);

    if (update != null) {
      taskSpan.textContent = update;
      li.classList.remove("completed");

      checkBox.checked = false;
      updateCounters();
    }
  });

  deleteBtn.addEventListener("click", function () {
  if (confirm("Are you sure you want to delete this task?")) {
    li.remove();
    updateCounters();
  }
});
}

const completeCounter = document.getElementById("complete-counter");
const uncompleteCounter = document.getElementById("uncomplete-counter");

function updateCounters() {
  const completedTasks = document.querySelectorAll(".complete").length;
  const uncompletedTasks =
    document.querySelectorAll("li:not(.complete)").length;

  completeCounter.textContent = completedTasks;
  uncompleteCounter.textContent = uncompletedTasks;
}

