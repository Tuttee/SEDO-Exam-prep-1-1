//refactor change 1
function add(a, b) {
  return a + b;
}

//Refactor change 2

function subtract(a, b) {
  return a - b;
}

//change 1
//Refactor change 3

//change 1
document.getElementById('btn-add').addEventListener('click', () => {
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = add(a, b);
});

//Change 2
//Change 2
document.getElementById('btn-subtract').addEventListener('click', () => {
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = subtract(a, b);
});

//Change 3

//Change 3