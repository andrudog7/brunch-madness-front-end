document.addEventListener('DOMContentLoaded', function(){
    fetchCustomers()
    fetchItems()
})

function fetchCustomers(){
    fetch(`http://127.0.0.1:3000/customers`)
    .then(response => response.json())
    .then(res => loadCustomerData(res))
}

function fetchItems(){
    fetch(`http://127.0.0.1:3000/items`)
    .then(response => response.json())
    .then(res => console.log(res))
}