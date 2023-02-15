let array_goods = [
    {
        id: 1,
        name: "Очки",
        description: "Очки защитные",
        sizes: [10],
        price: 234.2,
        available: true 
    }, 
    {
        id: 2,
        name: "Каска",
        description: "Каска защитная",
        sizes: [55, 56, 57],
        price: 1200,
        available: true 
    }, 
    {
        id: 3,
        name: "Костюм горка",
        description: "Костум горка, с флисовой подкладкой",
        sizes: [102, 110, 112],
        price: 3600,
        available: true 
    }, 
    {
        id: 4,
        name: "Казан",
        description: "Казан для приготовления на костре",
        sizes: [6, 8, 10, 12],
        price: 2500,
        available: true 
    }, 
    {
        id: 5,
        name: "Топор",
        description: "Топор туристический",
        sizes: [10],
        price: 1140,
        available: true 
    }, 
]

let basket = []

function addGoodInBasket(good, basket, count_good) {
    let add_basket = {}
    add_basket['good'] = good
    add_basket['amount'] = count_good
    basket.push(add_basket)
    return basket
}

function deleteGooodOnBasket(good, basket) {
    for (let i = 0; basket.length - 1; i++) {
        console.log(basket[i].good.id == good.id)
        if (basket[i].good.id == good.id) {
            console.log(basket[i])
            basket.splice(i, 1)
            break
        }        
    }
    return basket
}

function fullCleanBusket(basket){
    if (basket.length !== 0) {
        basket.splice(0, basket.length)
    }
    return basket
}

function totalCount(basket){
    totalArray = {
        totalAmmount: 0,
        totalSumm: 0,
    }
    console.log(basket.length)
    for (let i = 0; i <= basket.length - 1; i++){
        console.log(i)
        totalArray.totalSumm += (basket[i].good.price * basket[i].amount)
        totalArray.totalAmmount += basket[i].amount
    }
    return totalArray
}


addGoodInBasket(array_goods[1], basket, 5)
addGoodInBasket(array_goods[0], basket, 2)
// console.log("Корзина с товарами: ")
// console.log(basket)
/*
deleteGooodOnBasket(array_goods[1], basket)
console.log("Массив после удаления товара: ")
console.log(basket)
fullCleanBusket(basket)
console.log("Массив после полной очистки корзины: ")
console.log(basket)
*/
summ_basket = totalCount(basket)
console.log(summ_basket)