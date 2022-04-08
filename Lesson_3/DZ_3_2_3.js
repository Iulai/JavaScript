basket = [{name: 'bread', price: 50}, {name: 'coffee', price: 300}]
function countBasketPrice(basket) {
    var a = basket.reduce( (a, b) => {
    return a + b.price;
}, 0 )
    console.log(a)
}
countBasketPrice(basket)
