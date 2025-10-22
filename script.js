//refactor change 1
function add(a, b) {
  return a + b;
}

//Refactor change 2

function subtract(a, b) {
  return a - b;
}

//Refactor change 3

document.getElementById('btn-add').addEventListener('click', () => {
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = add(a, b);
});

document.getElementById('btn-subtract').addEventListener('click', () => {
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = subtract(a, b);
});