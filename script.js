// ==========================================================================
// Global State
// ==========================================================================
// Array that holds our tasks in memory.
// Each task is an object: { id: number, text: string, completed: boolean }
let tasks = [];

// ==========================================================================
// DOM Element References
// ==========================================================================
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const taskCounter = document.getElementById("task-counter");

// ==========================================================================
// Functions
// ==========================================================================

/**
 * Adds a new task to our tasks array.
 * If the input is empty or just spaces, it triggers a shake animation.
 * @param {string} text - The content of the new task.
 */
function addTask(text) {
  const trimmedText = text.trim();

  // Guard clause: reject empty input
  if (!trimmedText) {
    triggerInputShake();
    return;
  }

  // Create a new task object
  const newTask = {
    id: Date.now(), // Unique identifier using current timestamp
    text: trimmedText,
    completed: false
  };

  // Add the new task to our array
  tasks.push(newTask);

  // Clear the input field
  todoInput.value = "";

  // Re-render the task list on screen
  renderTasks();
}

/**
 * Toggles a task between completed and active.
 * @param {number} id - The unique ID of the task to toggle.
 */
function toggleTask(id) {
  // Find the task with matching id and flip its completed status
  tasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });

  // Re-render the task list on screen
  renderTasks();
}

/**
 * Deletes a task by its unique ID.
 * @param {number} id - The unique ID of the task to remove.
 */
function deleteTask(id) {
  // Filter out the task with matching id
  tasks = tasks.filter((task) => task.id !== id);

  // Re-render the task list on screen
  renderTasks();
}

/**
 * Triggers a shake animation on the input field when invalid/empty.
 */
function triggerInputShake() {
  todoInput.classList.remove("shake");
  // Force browser reflow so the animation can re-trigger if clicked repeatedly
  void todoInput.offsetWidth;
  todoInput.classList.add("shake");
  todoInput.focus();

  // Remove the class after the animation finishes (350ms)
  setTimeout(() => {
    todoInput.classList.remove("shake");
  }, 350);
}

/**
 * Updates the footer counter showing how many active (uncompleted) tasks remain.
 */
function updateTaskCounter() {
  const activeCount = tasks.filter((task) => !task.completed).length;
  const itemWord = activeCount === 1 ? "item" : "items";
  taskCounter.textContent = `${activeCount} ${itemWord} left`;
}

/**
 * Renders all tasks in the tasks array to the DOM.
 */
function renderTasks() {
  // Clear any existing list items
  todoList.innerHTML = "";

  // If there are no tasks, show a friendly empty message
  if (tasks.length === 0) {
    const emptyMessage = document.createElement("li");
    emptyMessage.className = "empty-state";
    emptyMessage.textContent = "No tasks yet! Add one above to get started.";
    todoList.appendChild(emptyMessage);
    updateTaskCounter();
    return;
  }

  // Loop through tasks and create HTML elements for each
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = `todo-item ${task.completed ? "completed" : ""}`;
    li.dataset.id = task.id;

    // Checkbox input
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo-checkbox";
    checkbox.checked = task.completed;
    checkbox.setAttribute("aria-label", `Mark "${task.text}" as ${task.completed ? "incomplete" : "complete"}`);
    checkbox.addEventListener("change", () => toggleTask(task.id));

    // Task text span
    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = task.text;

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn-delete";
    deleteBtn.innerHTML = "&times;";
    deleteBtn.setAttribute("aria-label", `Delete "${task.text}"`);
    deleteBtn.addEventListener("click", () => deleteTask(task.id));

    // Assemble the list item
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Append to list container
    todoList.appendChild(li);
  });

  // Update the counter
  updateTaskCounter();
}

// ==========================================================================
// Event Listeners
// ==========================================================================

// Handle form submission (covers clicking "Add" button AND pressing Enter key)
todoForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop standard browser page reload
  addTask(todoInput.value);
});

// Initial render when the script first loads
renderTasks();

