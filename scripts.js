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
document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  const id = Date.now(); // Generates a random number that we use to make unique id's for each todo.

  todos.push({
    task: event.target.elements[0].value,
    completed: false,
    id, // Object shorthand, we don't have to do 'id: (id)' if we just write id like this here since it will stand for 'id: (id)'
  });

  console.log(todos);

  renderTodo(todos);
});

// Render/re-render
