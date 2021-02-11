class Table {
    constructor(number) {
        this.number = number;
        this.orders = []
        Table.all.push(this)
    }
    static all = []
}

new Table(number = 1)
new Table(number = 2)
new Table(number = 3)
new Table(number = 4)
new Table(number = 5)
new Table(number = 6)
new Table(number = 7)
new Table(number = 8)

function calculateTotalTips(table) {
    let tableTotalOrderCost = []
    table.orders.forEach(order => {
        order.items.forEach(item => {
            tableTotalOrderCost.push(item.price)
        })
    })
    let tableTotalCost = tableTotalOrderCost.reduce(
        (accum, value) => accum + value, 0
    )
    let tableTips 
    tableTips = Math.ceil(tableTotalCost * .2)
    tipsEarned = document.getElementById('tipCount')
    tipsEarned.innerText = `Tips: $${totalTips+=tableTips}`
}