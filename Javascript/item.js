class Item {
    constructor(name, price, id) {
        this.name = name;
        this.price = price;
        this.id = id;
        Item.all.push(this)
    }
    static all = []
}

function loadItemData(itemsArray) {
    itemsArray.forEach(item => {
        new Item(item)
    })
    return console.log(Item.all)
}