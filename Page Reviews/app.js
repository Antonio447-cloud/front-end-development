// JSON data contained in an array with an index of 3 and a length of 4 elements
const array = [
    {
        id: 1,
        name: "Susan Smith",
        work: "Web Developer",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla modi doloribus fugit corrupti magnam? Laudantium fuga, libero vitae nemo perspiciatis nam est ut autem obcaecati neque corrupti iusto fugiat.",
    },
    {
        id: 2,
        name: "Anna Johnson",
        work: "Web Designer",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "Peter Jones",
        work: "Intern",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "Bill Anderson",
        work: "The Boss",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    },
];

// select html elements by id and store each in a variable
const pic = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

// select buttons using querySelector() method and store each in a variable
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// load and parse DOM elements using the window object
window.addEventListener('DOMContentLoaded', function () {
    getPersonId()
});

// set indexId of array and store it in a variable
let indexId = 0

// create function to get data from array and update such data in the DOM tree
function getPersonId() {
    const tool = array[indexId]
    pic.src = tool.image
    author.textContent = tool.name
    job.textContent = tool.work
    info.textContent = tool.text
    console.log(indexId);
    console.log(array);
};

// show previous person
prevBtn.addEventListener('click', function () {
    indexId--
    if (indexId < 0) {
        indexId = array.length - 1
    };
    getPersonId()
});

// show next person
nextBtn.addEventListener('click', function () {
    indexId++
    if (indexId > array.length - 1) {
        indexId = 0
    };
    getPersonId()
});

// show random person
randomBtn.addEventListener('click', function () {
    indexId = Math.floor (Math.random() * array.length)
    getPersonId()
});
