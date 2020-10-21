const cart = document.querySelector(".cart");
const buy = document.querySelector(".buyBefore");
const black = document.querySelector(".black");
const colors = document.querySelector(".colors");
const selectColor = document.querySelector(".selectColorBefore");
const colorRed = document.querySelector(".colorRed");
const colorYel = document.querySelector(".colorYel");
const colorGre = document.querySelector(".colorGre");
const image = document.querySelector(".image");

console.log(cart);

cart.addEventListener("click", function(){
    buy.className = "buyAfter"
    black.style.opacity = "0.5";
})
colors.addEventListener("click", function(){
    selectColor.className = "selectColorAfter"
    black.style.opacity = "0.5";
})

buy.addEventListener("mouseleave", function(){
    black.style.opacity = "0";
    buy.className = "buyBefore";
})
selectColor.addEventListener("mouseleave", function(){
    black.style.opacity = "0";
    selectColor.className = "selectColorBefore";
})

colorYel.addEventListener("click", function(){
    image.src = "chair-yellow.jpg"
})
colorRed.addEventListener("click", function(){
    image.src = "chair.jpg"
})
colorGre.addEventListener("click", function(){
    image.src = "chair-green.jpg"
})