const btn = document.querySelectorAll('.btn');
const btnColor = document.querySelector('#value');

let counter = 0

btn.forEach(function (step) {
    step.addEventListener('click', function(e) {
        const tool = e.currentTarget.classList
        if (tool.contains('decrease')) {
            counter--
        } else if (tool.contains('increase')) {
            counter++
        } else {
            counter = 0
        } 

        if (counter < 0) {
            btnColor.style.color = 'red'
        } else if (counter > 0) {
            btnColor.style.color = 'green'
        } else {
            btnColor.style.color = '#222'
        }
            btnColor.textContent = counter
    });
});
