const form = document.querySelector('form');

const ul = document.createElement('ul');

document.body.appendChild(ul);

form.addEventListener('submit', event => {
  console.log(event);
});
