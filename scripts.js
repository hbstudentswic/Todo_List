const form = document.querySelector('form');

const ul = document.createElement('ul'); /* adds a empty unordered list */

document.body.appendChild(ul);

form.addEventListener('submit', event => {
  event.preventDefault(); /* prevents page from refreshing on submit which is the browsers default behavior */
  // TODO: Take the tex from the input
  // TODO: Wrap that in an '<li></li>'
  // TODO: Append that to the '<ul></ul>'
  console.log(
    event.target.elements[0].value,
  ); /* will pull out text value from the form, thats why we use elements[0] */
});
