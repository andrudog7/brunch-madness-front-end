class Item {
    constructor(id, name, price, icon) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.icon = icon;
        Item.all.push(this)
    }
    static all = []

    static displayItemForm() {
        let itemHTML = "<form>"
        Item.all.forEach(item => {
            itemHTML += `<label for="${item.name}"style="width:200px;display:inline-block;padding:2px">${item.name}:</label><input type="text", id="${item.name}"><br>`
        })
        itemHTML += `<label for="table"style="width:200px;display:inline-block;padding:8px">To Table Number:</label><input type="text", id="table">`
        itemHTML += "</form>"
        return itemHTML
    }
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