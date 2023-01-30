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

clear_basket = {
    good: [],
    amount: 0,
}

function addGoodInBasket(good, basket) {
    basket.good.push(good)
    basket.amount++
    return basket
}

function deleteGooodOnBasket(good, basket) {
    for (let i = 0; basket.good.length - 1; i++) {
        if (basket.good[i].id == good.id) {
            basket.good.pop(i)
            basket.amount--
            break
        }        
    }
    return basket
}

function fullCleanBusket(basket){
    while (basket.good.length !== 0) {
        basket.good.pop()
        basket.amount--
    }
    return basket
}

function totalCount(basket){
    totalArray = {
        totalAmmount: 0,
        totalSumm: 0,
    }
    for (let i = 0; i < basket.good.length; i++){
        totalArray.totalSumm += basket.good[i].price
    }
    totalArray.totalAmmount = basket.good.length
    return totalArray
}

let basket_one = addGoodInBasket(array_goods[1], clear_basket)
basket_one = addGoodInBasket(array_goods[0], basket_one)
console.log("Корзина с товарами: ")
console.log(basket_one)
console.log(totalCount(basket_one))
deleteGooodOnBasket(array_goods[1], basket_one)
console.log("Массив после удаления товара: ")
console.log(basket_one)
fullCleanBusket(basket_one)
console.log("Массив после полной очистки корзины: ")
console.log(basket_one)