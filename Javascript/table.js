class Table {
    constructor(customer, order) {
        this.customer = customer.id;
        this.orders = []
        Order.all.push(this)
    }
    static all = []
}