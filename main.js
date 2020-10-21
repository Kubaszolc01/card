const cart = document.querySelector(".cart");
const buy = document.querySelector(".buy");
const black = document.querySelector(".black");

console.log(cart);

cart.addEventListener("click", function(){
    buy.style.display = "block";
    black.style.opacity = "0.5";
})

buy.addEventListener("mouseleave", function(){
    buy.style.display = "none";
    black.style.opacity = "0";
})