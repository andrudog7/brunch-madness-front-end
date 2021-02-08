class Table {
    constructor(customer, order) {
        this.customer = customer.id;
        Table.orders.push(order)
        Order.all.push(this)
    }
    static orders = []
    static all = []
}