class Customer {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        Customer.all.push(this)
    }
    static all = []
}

function fetchCustomers(){
    fetch(`http://127.0.0.1:3000/customers`)
    .then(response => response.json())
    .then(res => loadCustomerData(res))
}

function loadCustomerData(customersArray) {
    customersArray.forEach(customer => {
        new Customer( name = customer.name, id = customer.id)
    })
}