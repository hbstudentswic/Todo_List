// ___Variable Declarations___ \\

const ul = document.body.appendChild(document.createElement('ul'));
// Creates the unordered list and appends it to the page.

const todosCounter = document.querySelector('#todos-counter');

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

// _____Function Declarations_____ //
// Below is the render function
function renderTodos(todoItems) {
  // TODO: Turn a bunch of todos into a full li [DONE]
  ul.innerHTML = todoItems
    .map(({ id, task, completed }) => {
      if (completed) {
        // This uses boolean to determine if it is completed
        return `
        <li class="is-completed">
        <input type="checkbox" id="${id}" >
        <label for="${id}">${task}</label>
        <input type="button" id="${id}" >
        </li>
        `;
      } // We don't have to use an else statement for this if statement boolean check.

      return `
  <li>
  <input type="checkbox" id="${id}">
  <label for="${id}">${task}</label>
  <input type="button" id="${id}" >
  </li>
  `;
    })
    .join(''); // We uses this to remove the comma by just displaying the string instead of the array

  // TODO: Move this to its own function - use ES Modules
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    // .forEach(checkbox => {checkbox.addEventListener}) means for each checkbox on that page add an event listener
    checkbox.addEventListener('change', ({ target }) => {
      // the event.target or ({ target }) here will check to see which particular todo checkbox we interacted with.

      // this will iterate over `todos` and keep going until the `id` of a todo item matches with the `id` that is coming from the input we just checked

      // The target.id in this example is the id of the todo that we have selected. the Id was generated and assigned above.
      const foundTodo = todos.find(({ id }) => id === Number(target.id));
      // The foundTodo is a variable that once the specific todo item is found, it will be assigned to it (the foundTodo variable)

      // Inverse the boolean
      foundTodo.completed = !foundTodo.completed;
      renderTodos(todos);
    });
  });
  todosCounter.innerText = `${ul.querySelectorAll('.is-completed').length} / ${
    todos.length
  }`;
}

// _____Business Logic_____ //
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
  // TIP we re-render that todo so often to keep the page updated and re-attach the event listeners to the objects that are rendered, since when we re-render the page, the objects "are completely re-created", they are not the same in memory as they were before.
});

document.querySelectorAll('input[type="button"]').forEach(button => {
  button.addEventListener('click', ({ target }) => {
    const selectedTodo = todos.find(({ id }) => id === Number(target.id));
    todos.removeChild(selectedTodo); // Looked at node.removeChild() on MDN
    renderTodos(todos);
  });
});
