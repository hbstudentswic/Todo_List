// ___Variable Declarations___ //
document.body.appendChild(document.createElement('ul'));
const ul = document.querySelector('ul');

const todos = [];

// ___Function Declarations___ //
function renderTodo(todoItems) {
  // TODO: Turn a bunch of todos into a full li
  ul.innerHTML = todoItems
    .map(
      todoItem => `
  <li>
  <input type="checkbox" id="${todoItem.id}">
  <label for="${todoItem.id}">${todoItem.task}</label>
  </li>
`,
    )
    .join(''); // We uses this to remove the comma by just displaying the string instead of the array
}

// The above function is the function that will render all the todo's at the same time, it will no longer just replace the same one.

// ___Business Logic___ //
renderTodo(todos);

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  const id = Date.now(); // Generates a random number that we use to make unique id's for each todo.

  todos.push({
    task: event.target.elements[0].value,
    completed: false,
    id, // Object shorthand, we don't have to do 'id: (id)' if we just write id like this here since it will stand for 'id: (id)'
  });

  // Render/re-render
  renderTodo(todos);
});

document.querySelectorAll(`input[type="checkbox"]`).forEach(checkbox => {
  checkbox.addEventListener('change', event => {
    // iterate over `todos` and keep going until the `id` of a todo item matches with the `id` that is coming from the input we just checked
    todos.find(({ id }) => id === Number(event.target.id));
  });
});
