class CreatProduct{
    constructor(title, price, category, shipment, description, madeInCountry, inStock, availablity){
        this.title = title;
        this.price = price;
        this.category= category;
        this.shipment = shipment; 
        this.description = description;
        this.madeInCountry = madeInCountry;
        this.inStock = inStock;
        this.availablity = availablity;
    }
    buy(numberAsked, submittedCode = ``){
        let totalPrice = 0;
        let discountCode = `576CGR`;
        submittedCode = submittedCode.toUpperCase();
        try {
            if (numberAsked > this.availablity){
                throw new TypeError()
            }
            else{
                this.availablity = this.availablity - numberAsked;
                if(this.availablity == 0){
                    this.inStock = !this.inStock;
                }
                totalPrice = this.price * numberAsked;
                if (submittedCode == discountCode){
                    totalPrice = totalPrice - (totalPrice * 15 / 100)
                    console.log(`Discounted price is ${totalPrice}`)
                }
                else if (submittedCode != `` && submittedCode != discountCode){
                    console.log(`Overall price is ${totalPrice} Because your discount code is invalid`)
                }
                else if (submittedCode == ``){
                    console.log(`Overall price is ${totalPrice}`)
                }
            }
        }catch(err){
            console.log(`Error! Currently we don't have ${numberAsked} in stock`)
        }
    }
    addToStock (howMany){
        if (this.availablity == 0){
            this.inStock = !this.inStock
        }
        this.availablity = this.availablity + howMany;
    }
}
let product1 = new CreatProduct(`Men's Running Shoes Nike`, 149.99, `Shoes`, `Premium`, `Great Running Shoes!`, `Italy`, true, 5);
product1.addToStock(5)
product1.buy(5,`576C1GR`);
// for (keys of Object.keys(product1)){
//     if (keys == `shipment`){
//         product1.delivery = product1[keys]
//         delete product1[keys];
//     }
// }
console.log(product1)
