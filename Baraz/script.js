// Nav section
const links = document.querySelector('.links');
const hamburger = document.querySelector('.hamburger');


hamburger.addEventListener('click', () => {
    
    links.classList.toggle('show')
    
})


// Menu section
const menuContainer= document.querySelector('.menu-container')
async function menuItems() {
  const res = await fetch("menu.json")
  const data = await res.json();
  let products = data.menus;
let result = ''
  products.forEach((product) => {
    result += `<div class="card">
                    <p>${product.title}</p>
                    <img src="${product.img}" alt="">
            
            <div class="card-info">
                <h4>${product.price}</h4>
                <p>${product.calories} calories</p>
            </div>
            <div class="card-back">
                <button>Add to cart</button>
            </div>
            </div>`
  })
  menuContainer.innerHTML = result;
}

menuItems();


function updateMenu() {

}




// Reviews Section 

const reviewItem = document.querySelector('.review-item');
const review = document.querySelectorAll('.review');
const buttonNext = document.querySelector('.btn-next');
const buttonPrevious = document.querySelector('.btn-previous');

let index = 0;

//  function reviewAuto(){
//    index++;
//   reviewShow()
//  }

// setInterval(reviewAuto, 5000);

function reviewShow() {
  if(index > review.length -1) {
    index = 0
  }
  else if (index < 0) {
    index = review.length -1
  }


  reviewItem.style.transform = `translateX(${-index*30}rem)`;
}

// function resetShow(){
//     clearInterval(reviewAuto)

// }
buttonNext.addEventListener('click', ()=>{
    index++;
    reviewShow();
    // resetShow()

})



buttonPrevious.addEventListener('click', ()=>{
    index--;
    reviewShow();
    // reviewShow();

})