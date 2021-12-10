const shop = document.querySelector('a.shop');
const shopWrapper = document.querySelector('div.shopwrapper');

function handleClick(event) {
  event.preventDefault();
  event.target.classList.toggle('active');
  shopWrapper.classList.toggle('active');
}

shop.addEventListener('click', handleClick);
