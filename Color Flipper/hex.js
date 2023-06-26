const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const arrayBtn = document.getElementById('btn');
const arrayColor = document.querySelector('.color');

function randomnessIsAround() {
    return Math.floor (Math.random() * array.length);
};

arrayBtn.addEventListener('click', function () {
    let hexColor = '#'
    for (let c = 0 ; c < 6 ; c++) {
        const random = randomnessIsAround();
        hexColor += array[random];
        document.body.style.backgroundColor = hexColor;
        arrayColor.textContent = hexColor;
        console.log(hexColor);
        console.log(random);
    };
});
