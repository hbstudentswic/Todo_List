const form = document.querySelector('form');
const task = [];

form.addEventListener('submit', event => {
  event.preventDefault();
  const newTask = Object.fromEntries(new FormData(event.target));
  console.log(newTask); /* To be removed */
  task.push(newTask);
  const div = document.createElement('div');
});
