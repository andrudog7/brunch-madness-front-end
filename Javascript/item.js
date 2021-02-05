class Item {
    constructor(id, name, price, icon) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.icon = icon;
        Item.all.push(this)
    }
    static all = []
}

function fetchItems(){
    fetch(`http://127.0.0.1:3000/items`)
    .then(response => response.json())
    .then(res => loadItemData(res))
}

function loadItemData(itemsArray) {
    itemsArray.forEach(item => {
        new Item(id = item.id, name = item.name, price = item.price, icon = item.icon)
    })
}