const colors = ["green", "purple", "red", "blue", "rgba(164, 180, 21)"];
const btn = document.getElementById('btn');
const clr = document.querySelector('.color');

function getRandomNumber() {
  return Math.floor (Math.random() * colors.length)
};

btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    clr.textContent = colors[randomNumber];
    console.log(randomNumber);
    console.log(clr);
});
