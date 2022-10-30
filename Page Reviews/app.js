const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Web Developer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.",
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "Web Designer",
        img: 
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "Peter Jones",
        job: "Intern",
        img: 
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "Bill Anderson",
        job: "The Boss",
        img: 
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    },
];

// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

// select buttons
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const randomBtn = document.querySelector('.random-btn');

// set currentId
let currentId = 0;

// create function
window.addEventListener('DOMContentLoaded', function () {
    showPerson()
});

// show person based on Id
function showPerson() {
    const item = reviews[currentId];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    console.log(currentId);
};

// show next person
nextBtn.addEventListener('click', function () {
    currentId++;
    if(currentId > reviews.length - 1) {
        currentId = 0;
    }
    showPerson();
});

// show prev person
prevBtn.addEventListener('click', function () {
    currentId--;
    if(currentId < 0) {
        currentId = reviews.length - 1;
    }
    showPerson();
});

// show random person
randomBtn.addEventListener('click', function () {
    currentId = Math.floor(Math.random() * reviews.length)
    showPerson();
});