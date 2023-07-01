const btn = document.querySelectorAll('.btn');
const btnValue = document.querySelector('#value');

let counter = 0;

btn.forEach(function(steps) {
    steps.addEventListener('click', function(e) {
        const random = e.currentTarget.classList;
        if (random.contains('decrease')) {
            counter--
        } else if (random.contains('increase')) {
            counter++
        } else (
            counter = 0
        )
        if (counter > 0) {
            btnValue.style.color = 'green'
        } 
        else if (counter < 0) {
            btnValue.style.color = 'red'
        } 
        else if (counter === 0) {
            btnValue.style.color = '#222'
        }

        btnValue.textContent = counter;
    });
});
