// set initial count
let count = 0;

// select value and btn
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const step = e.currentTarget.classList;
        if (step.contains('decrease')) {
            count--;
        } else if (step.contains('increase')) {
            count++;
        } else {
            count = 0;
        } if (count > 0) {
            value.style.color = 'green';
        } else if (count < 0) {
            value.style.color = 'red';
        } else if (count === 0) {
            value.style.color = '#222';
        }
        value.textContent = count;
    });
});
