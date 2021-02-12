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

function customerOrder(table, customer) {
    numberOfItems = Math.floor(Math.random() * 6)
    let order = new Order(table = table, customer = customer)
    for (i = 0; i <= numberOfItems; i++) {
        order.items.push(Item.all[Math.floor(Math.random() * 9)])
    }
    let tableContent = document.getElementById(`table-${table}-content`).firstChild
    tableContent.innerText = "🤗"
    orderFulfilledCountdown(tableContent, table) 
}

