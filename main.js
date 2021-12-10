const shop = document.querySelector('a.shop');
const shopWrapper = document.querySelector('div.shopwrapper');
const mobileBtn = document.querySelector('.menu-mobile');
const categories = document.querySelector('.categories');

function handleClick(event) {
  event.preventDefault();
  event.target.classList.toggle('active');
  shopWrapper.classList.toggle('active');
}

function handleMobile(event) {
  event.preventDefault();
  event.target.classList.toggle('active');
  categories.classList.toggle('active');
}

shop.addEventListener('click', handleClick);
mobileBtn.addEventListener('click', handleMobile);
