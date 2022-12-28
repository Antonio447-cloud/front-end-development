/* traversing the DOM */

const btn = document.querySelectorAll('.question-btn');

btn.forEach(function (step) {
    step.addEventListener('click', function (e) {
        const questions = e.currentTarget.parentElement.parentElement
        questions.classList.toggle('show-text')
        console.log(questions);
    });
});


/* without traversing the DOM */

// const questions = document.querySelectorAll('.question');

// questions.forEach(function (step) {
//     const btn = step.querySelector('.question-btn')
//     btn.addEventListener('click', function () {
//         questions.forEach(function (look) {
//             if (look !== step) {
//                 look.classList.remove('show-text')
//             }
//         });
//         step.classList.toggle('show-text')
//         console.log(step);
//     });
// });
