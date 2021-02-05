class Customer {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        Customer.all.push(this)
    }
    static all = []
}

function loadCustomerData(customersArray) {
    customersArray.forEach(customer => {
        new Customer(customer)
    })
}