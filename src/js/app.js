import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const priceHot = document.querySelectorAll('p');
  console.log(priceHot);
  priceHot.forEach(price => {
    if(price.className.includes('hot')){
      price.className += '';
    }
  })
});
