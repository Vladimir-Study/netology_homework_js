class Good {
    
    constructor(id, name, description, sizes, price, available){
        this.id = id
        this.name = name
        this.description = description
        this.sizes = sizes        
        this.price = price
        this.available = available
    }

    setAvailable(available) {
        this.available = available
    }
}

class GoodsList{

    constructor(goods, filter, sortPrice = true, sortDir = true) {
        this._goods = goods 
        this.filter = filter
        this.sortPrice = sortPrice
        this.sortDir = sortDir
    } 

    get list(){
        let return_array = []
        let filter_goods = this._goods.filter(available => available.available == true)
        for (let i = 0; i <= filter_goods.length - 1; i++) {
            let name = filter_goods[i].name
            let re = RegExp(this.filter, 'i')     
            let coincidence = name.match(re)
            if (coincidence != null) {
                return_array.push(filter_goods[i])
            }
        }
        if (this.sortPrice) {
            console.log('true')
            if (this.sortDir) {
                console.log('true')
                return return_array.sort((price_one, price_two) => (price_one.price <= price_two.price) ? -1: 1)
            }
            return return_array.sort((price_one, price_two) => (price_one.price <= price_two.price) ? 1: -1)
        }
        return return_array
    }

    set add(good){
        this._goods.push(good)
    }

    set remove(id){
        for (let i = 0; i <= this._goods.length - 1; i++) {
            if (this._goods[i].id === id) {
                this._goods.splice(i, 1) 
            }
        }
    }
}

class BasketGood extends Good {

    constructor(good, amount) {
        super(good.id, good.name, good.description, good.sizes, good.price, good.available)
        this.amount = amount
    }
}

class Basket {

    constructor(goods) {
        this.goods = goods
    }

    get totalAmount() {
        let total_amount = 0
        for (let i = 0; i <= this.goods.length - 1; i++) {
            total_amount += (this.goods[i].price * this.goods[i].amount)
        }
        return total_amount
    }

    get totalSum() {
        let total_sum = 0
        for (let i = 0; i <= this.goods.length - 1; i++) {
            total_sum += this.goods[i].amount
        }
        return total_sum
    }

    add (good, amount) {
        let flag = false
        for (let i = 0; i <= this.goods.length - 1; i++) {
            if (good.id == this.goods[i].id) {
                this.goods[i].amount += amount
                flag = true
            }
        }
        if (!flag) {
            let add_good = new BasketGood(good, amount)
            this.goods.push(add_good)
        }  
    }

    remove (good, amount) {
        for (let i = 0; i <= this.goods.length - 1; i++) {
            if (good.id == this.goods[i].id) {
                this.goods[i].amount -= amount
                if (this.goods[i].amount == 0) {
                    this.goods.splice(i, 1) 
                }
            }
        }
    }

    clear() {
        this.goods.splice(0, this.goods.length)
    }

    removeUnavailable() {
        this.goods = this.goods.filter(good => good.available === true)
    }

}

let good_one = new Good(1, 'Milk', 'Good milk', '1', 131.0, true)
let good_two = new Good(2, 'Bread', 'Good bread', '1', 134.0, false)
let good_three = new Good(3, 'Bagel', 'Good bagle', '2', 32.0, true) 
let bgood_one = new BasketGood(good_one, 2)
let bgood_two = new BasketGood(good_two, 4)
// console.log(good_one, good_two)
let goods_one = new GoodsList([good_one, good_two, good_three], '', true, true)
// console.log(goods_one.list)
// goods_one.add = good_three
// goods_one.remove = 1 
let basket_one = new Basket([bgood_one, bgood_two])
basket_one.add(good_two, 2)
// basket_one.remove(good_one, 1)
// basket_one.clear()
basket_one.removeUnavailable()
console.log(basket_one)