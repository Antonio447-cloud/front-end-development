const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const clr = document.querySelector('.color');

function getRandomNumber() {
  return Math.floor (Math.random() * hex.length)
};

btn.addEventListener("click", function () {
  let hexRain = "#"
  for (let c = 0 ; c < 6 ; c++) {
    hexRain += hex[getRandomNumber()];
  };
  document.body.style.backgroundColor = hexRain;
  clr.textContent = hexRain;
  console.log(hexRain);
  console.log(clr);
});
