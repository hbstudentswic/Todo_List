const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const newTask = Object.fromEntries(new FormData(event.target));
  console.log(newTask);
});
