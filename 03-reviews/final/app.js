// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];
// select DOM Elements
const surpriseBtn = document.querySelector('.random-btn')
const nextReviewBtn = document.querySelector('.next-btn')
const prevReviewBtn = document.querySelector('.prev-btn')

const reviewHTMLElt = document.querySelector('.review')

function getRandomReview() {
  let randomIdx = Math.floor(Math.random()*reviews.length)
  console.log('new review');
  return reviews[randomIdx]
}

function updateHtml(item) {
  const itemHTML = `
  <div class="img-container">
    <img id="person-img" src=${item.img} alt="author pic">
  </div>
  <h4 id="author">${item.name}</h4>
  <div id="job">${item.job}</div>
  <div id="info">${item.text}</div>    
  `
  console.log('updated');
  return itemHTML
}

let randomReview = ''
let actualReviewIdx = 0
surpriseBtn.addEventListener('click', () => {
  console.log('random review');
  randomReview = getRandomReview()
  reviewHTMLElt.innerHTML = updateHtml(randomReview)
  actualReviewIdx = randomReview.id - 1
  console.log(actualReviewIdx);
})

prevReviewBtn.addEventListener('click', () => {
  console.log('previous review');
  actualReviewIdx--
  if(actualReviewIdx < 0){
    actualReviewIdx = 3
  }
  reviewHTMLElt.innerHTML = updateHtml(reviews[actualReviewIdx])
})

nextReviewBtn.addEventListener('click', () => {
  console.log('next review');
  actualReviewIdx++
  if(actualReviewIdx > reviews.length - 1){
    actualReviewIdx = 0
  }
  reviewHTMLElt.innerHTML = updateHtml(reviews[actualReviewIdx])
}) 