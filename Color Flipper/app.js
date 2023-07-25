const array = ["green", "purple", "yellow", "blue"];
const arrayBtn = document.getElementById('btn');
const arrayColor = document.querySelector('.color');

function getRandomNumber() {
    return Math.floor (Math.random() * array.length);
};

arrayBtn.addEventListener('click', function () {
    const random = getRandomNumber();
    document.body.style.backgroundColor = array[random];
    arrayColor.textContent = array[random];
    console.log(random);
    console.log(array);
});
