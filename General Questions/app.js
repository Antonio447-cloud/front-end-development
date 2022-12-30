/* without traversing the DOM */

const questions = document.querySelectorAll('.question');

questions.forEach(function (step) {
    const btn = step.querySelector('.question-btn')
    btn.addEventListener('click', function () {
        questions.forEach(function (look) {
            if (look !== step) {
                look.classList.remove('show-text')
            }
        });
        step.classList.toggle('show-text')
        console.log(step);
    });
});


/* traversing the DOM */

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function (step) {
//     step.addEventListener('click', function (e) {
//         const btn = e.currentTarget.parentElement.parentElement
//         btn.classList.toggle('show-text');
//         console.log(btn);
//     });
// });
