class Order {
    constructor(table, customer) {
        this.table = table;
        this.customer = customer.id;
        this.items = []
        this.displayItems
        Order.all.push(this)
    }
    displayItems() {
        // let names = this.items.reduce(function (acc, item) {
        //     if (typeof acc[item.name] === 'undefined') {
        //       acc[item.name] = 1;
        //     } else {
        //       acc[item.name] += 1;
        //     }
          
        //     return acc;
        //   }, {});
        let uniqNames = [...new Set(this.items)]
        let displayOrderContent = ""
        uniqNames.forEach(item => {
            let count = this.items.filter(orderItem => orderItem === item).length
            displayOrderContent += `${item.name}: ${count}, `
        })
          return displayOrderContent.split(",").splice(0, displayOrderContent.split(",").length - 1)
    }
    static all = []
}
