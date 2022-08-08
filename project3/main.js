const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "web developer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "Peter Jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "Bill Anderson",
        job: "the boss",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

const img = document.getElementById('person-img');
const author = document.getElementById('name');
const job = document.getElementById('job');
const text = document.getElementById('text');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const ramdomBtn = document.querySelector('.ramdom-btn');

// set starting item

let currentItem = 0;

//load initial item

window.addEventListener('DOMContentLoaded', () => {
    showPerson(currentItem)
})

nextBtn.addEventListener('click', () => {
    console.log(currentItem)

    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }

    showPerson(currentItem)

})

prevBtn.addEventListener('click', () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = 3;
    }
    console.log(currentItem)
    
    showPerson(currentItem)
})

ramdomBtn.addEventListener('click', () => {
    currentItem = Math.floor(Math.random()*4);

    showPerson(currentItem)
})

function showPerson(person) {
    const profile = reviews[currentItem];
    img.src = profile.img;
    author.textContent = profile.name;
    job.textContent = profile.job;
    text.textContent = profile.text;
}
