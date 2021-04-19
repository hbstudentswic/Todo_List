const form = document.querySelector('form');

document.body.appendChild(document.createElement('ul'));

const ul = document.querySelector('ul'); /* adds a empty unordered list */

form.addEventListener('submit', event => {
  event.preventDefault(); /* prevents page from refreshing on submit which is the browsers default behavior */

  const newToDo = `<li>${event.target.elements[0].value}</li>`;
  /* will pull out text value from the form, thats why we use elements[0] */

  ul.innerHTML = newToDo;
  // innerHTML - just assign a string that has HTML inside of it
});

// TODO: Bring the entered task from the unordered list and put them into an array. I would imagine we would do this by using Array map

const tasksUL = document.querySelectorAll('ul');

const tasksArray = Array.from(tasksUL);

const tasks = tasksArray.map(task => task.querySelector('ul'));
