class Order {
    constructor(table, customer) {
        this.table = table;
        this.customer = customer.id;
        this.items = []
        Order.all.push(this)
    }
    static all = []
}