const cart = document.querySelector('.cart')
const btn_cart = document.querySelector('.cart-shopping')
console.log(cart)
console.log(btn_cart)
btn_cart.addEventListener('click',()=>{
    cart.classList.toggle('active')
})