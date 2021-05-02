// Variable Declarations
const ul = document.body.appendChild(document.createElement('ul'));

const todos = [
  {
    userId: 1,
    id: 1,
    task: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    task: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    task: 'fugiat veniam minus',
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    task: 'et porro tempora',
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    task: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    task: 'qui ullam ratione quibusdam voluptatem quia omnis',
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    task: 'illo expedita consequatur quia in',
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    task: 'quo adipisci enim quam ut ab',
    completed: true,
  },
];

// Function Declarations
function renderTodos(todoItems) {
  // TODO: Turn a bunch of todos into a full li
  ul.innerHTML = todoItems
    .map(({ id, task, completed }) => {
      if (completed) {
        return `
        <li class="is-completed">
        <input type="checkbox" id="${id}" >
        <label for="${id}">${task}</label>
        </li>
        `;
      }

      return `
  <li>
  <input type="checkbox" id="${id}">
  <label for="${id}">${task}</label>
  </li>
  `;
    })
    .join(''); // We uses this to remove the comma by just displaying the string instead of the array

  // TODO: Move this to its own function - use ES Modules
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', ({ target }) => {
      // Iterate over `todos` and keep going until the `id` of a todo item matches with the `id` that is coming from the input we just checked
      const foundTodo = todos.find(({ id }) => id === Number(target.id));

      // Inverse the boolean
      foundTodo.completed = !foundTodo.completed;
      renderTodos(todos);
    });
  });
}

// Business Logic
renderTodos(todos);

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  const id = Date.now();
  // We use the above data for creating unique IDs for each task we add. The task are added in the text box the submit feature that the form uses is assigned to the button.

  todos.push({
    task: event.target.elements[0].value,
    completed: false,
    id,
    // Object shorthand, we don't have to do 'id: (id)' if we just write id like this here since it will stand for 'id: (id)'
  });

  // Render/re-render
  renderTodos(todos);
});
