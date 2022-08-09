const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 4,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 5,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 6,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 7,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 8,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steack dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
const btnContainer = document.querySelector('.btn-container')
const sectionCenter = document.querySelector('.article-center')



window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);
  
  displayButtons(btnContainer);
})

function displayButtons(container) {
  const categories = menu.reduce((values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category)
    }
    
    return values
  }, ['all'])
  
  const categoryButton = categories.map(category => {
    return `<button class="filter-btn">${category}</button>`
  }).join('')
  
  container.innerHTML = categoryButton
  const btns = document.querySelectorAll('.filter-btn')
  btns.forEach((btn) => {
    btn.addEventListener('click', e => {
      const option = e.currentTarget.textContent
      
      const menuCategory = menu.filter(menuItem => {
        if (menuItem.category == option.toLowerCase()) {
          return menuItem
        }
      })
      
      if (option.toLowerCase() == "all") {
        displayMenuItems(menu)
      } else {
        displayMenuItems(menuCategory)
      }
    })
    
  })
  
}


function displayMenuItems(menuItems) {
  let displaMenu = menuItems.map(item => {
    
    return `<article class="container">
    <img class="photo" src=${item.img} alt=${item.title}>
    <div class="info-article">
    <header class="header-container">
    <h4 class="name">${item.title}</h4>
    <h4 class="price">$${item.price}</h4>
    </header>
    <p class="info">${item.desc}</p>
    </div>
    </article>`
  })
  displaMenu = displaMenu.join('');
  sectionCenter.innerHTML = displaMenu
}
