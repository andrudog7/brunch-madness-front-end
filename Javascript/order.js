class Order {
    constructor(table, customer) {
        this.table = table;
        this.customer = customer.id;
        this.items = []
        this.displayItems
        Order.all.push(this)
    }
    displayItems() {
        let uniqNames = [...new Set(this.items)]
        let displayOrderContent = ""
        uniqNames.forEach(item => {
            let count = this.items.filter(orderItem => orderItem === item).length
            displayOrderContent += `${count} ${item.name}, `
        })
          return displayOrderContent.split(",").splice(0, displayOrderContent.split(",").length - 1)
    }
    static tableLastOrder(table) {
        let tableOrders1 = Order.all.filter(e => e.table === table)
        return tableOrders1[tableOrders1.length - 1]
    }
    static all = []
}

function displayOrder(order) {
    Swal.fire(`${Customer.all.find(e => e.id === order.customer).name}'s Order`,
    `${printOrderContent(order)}`)
}

function printOrderContent(order) {
    let string = ""
    for(i = 0; i < order.displayItems().length; i ++) {
        string += ((order.displayItems()[i] + "<br>"))}
    return string
}

function compareOrders(firstItems, secondItems) {
    let compareArray = []
    firstItems.forEach((item, index) => {
        if (item === secondItems[index]) {
            compareArray.push("true")
        } 
        if (item !== secondItems[index]) {
        compareArray.push("false")
        }
    })
    return compareArray
}
