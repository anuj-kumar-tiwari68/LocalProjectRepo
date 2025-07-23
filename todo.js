let todoList = [
  { item: "Buy milk", dueDate: "2024-10-04" },
  { item: "Go to college", dueDate: "2024-10-04" },
];

displayItems();

function addTodo() {
  const inputElement = document.querySelector("#todo-input");
  const dateElement = document.querySelector("#todo-date");
  const todoItem = inputElement.value.trim();
  const todoDate = dateElement.value;

  if (!todoItem || !todoDate) {
    alert("Please enter both task and date.");
    return;
  }

  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = "";
  dateElement.value = "";

  displayItems();
}

function displayItems() {
  const container = document.querySelector(".todo-container");
  container.innerHTML = "";

  todoList.forEach((todo, index) => {
    const itemElement = document.createElement("div");
    itemElement.className = "todo-item";

    const taskSpan = document.createElement("span");
    taskSpan.textContent = todo.item;

    const dateSpan = document.createElement("span");
    dateSpan.textContent = formatDate(todo.dueDate);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn-delete";
    deleteBtn.onclick = () => {
      todoList.splice(index, 1);
      displayItems();
    };

    itemElement.append(taskSpan, dateSpan, deleteBtn);
    container.appendChild(itemElement);
  });
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
