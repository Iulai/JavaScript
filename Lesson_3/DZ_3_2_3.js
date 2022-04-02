basket = [{name: 'bread', price: 50}, {name: 'coffee', price: 300}]
function countBasketPrice(basket) {
    var a = 0
    for (var i in basket) {
        a = a + (basket[i]['price'])
    }
    console.log(a)
}
countBasketPrice(basket)
