//@ts-check

const form = document.querySelector("form");
const list = document.querySelector(".list");

const deleteTodo = item => list.removeChild(item);

const toggleTodo = item => item.classList.toggle("list__item--complete");

form.addEventListener("submit", event => {
  event.preventDefault();
  const input = form.querySelector("input");
  const value = input.value;
  input.value = "";

  const check = document.createElement("button");
  check.classList.add("button", "button--check", "list__button-check");
  check.innerHTML = "&check;";
  check.addEventListener("click", event =>
    toggleTodo(event.target.parentElement)
  );

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("button", "button--delete");
  deleteButton.innerHTML = "&times;";
  deleteButton.addEventListener("click", event =>
    deleteTodo(event.target.parentElement)
  );

  const text = document.createElement("p");
  text.classList.add("list__text");
  text.innerHTML = value;

  const li = document.createElement("li");
  li.classList.add("list__item");

  li.appendChild(check);
  li.appendChild(deleteButton);
  li.appendChild(text);

  list.appendChild(li);
});
