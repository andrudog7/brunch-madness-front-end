const WAITER = document.getElementById('waiter')
const GAME = document.getElementsByClassName('restaurant')[0]
const GAME_HEIGHT = 400
const GAME_WIDTH = 400
const LEFT_ARROW = 37 
const RIGHT_ARROW = 39 
const UP_ARROW = 38
const DOWN_ARROW = 40

window.addEventListener('keydown', moveWaiter)

function moveWaiter(e) {
    if (e.which === LEFT_ARROW || e.which === RIGHT_ARROW || e.which === DOWN_ARROW || e.which === UP_ARROW) {
      e.preventDefault()
      e.stopPropagation()
    }
    if (e.which === LEFT_ARROW) {
        return moveWaiterLeft()}
    if(e.which === RIGHT_ARROW) {
        return moveWaiterRight()}
    if (e.which === DOWN_ARROW) {
        return moveWaiterDown()}
    if(e.which === UP_ARROW) {
        return moveWaiterUp()}
  }
  
  function moveWaiterLeft() {
    window.requestAnimationFrame(function() {
      const left = positionToInteger(WAITER.style.left)
  
      if (left > -600) {
        WAITER.style.left = `${left - 20}px`;
      }
      findOrder()
      findBar()
    })
  }
  
  function moveWaiterRight() {
    window.requestAnimationFrame(function() {
      const left = positionToInteger(WAITER.style.left)
  
      if (left < 400) {
        WAITER.style.left = `${left + 20}px`;
      }
      findOrder()
      findBar()
    })
  }

  function moveWaiterDown() {
    window.requestAnimationFrame(function() {
      const bottom = positionToInteger(WAITER.style.bottom)
  
      if (bottom > -200) {
        WAITER.style.bottom = `${bottom - 20}px`;
      }
      findOrder()
      findBar()
    })
  }
  
  function moveWaiterUp() {
    window.requestAnimationFrame(function() {
      const bottom = positionToInteger(WAITER.style.bottom)
  
      if (bottom < 200) {
        WAITER.style.bottom = `${bottom + 20}px`;
      }
      findOrder()
      findBar()
    })
  }

  function positionToInteger(p) {
    return parseInt(p.split('px')[0]) || 0
  }

  function findOrder() {
    let tableContent1 = document.getElementById(`table-1-content`).firstChild
    let tableContent2 = document.getElementById(`table-2-content`).firstChild
    let tableContent3 = document.getElementById(`table-3-content`).firstChild
    let tableContent4 = document.getElementById(`table-4-content`).firstChild
    let tableContent5 = document.getElementById(`table-5-content`).firstChild
    let tableContent6 = document.getElementById(`table-6-content`).firstChild
    let tableContent7 = document.getElementById(`table-7-content`).firstChild
    let tableContent8 = document.getElementById(`table-8-content`).firstChild
      if (tableContent1.innerText === "‼️" && (WAITER.style.left === "-360px") && (WAITER.style.bottom === "170px")) {
        order = Order.all.find(order => order.table === 1)
        displayOrder(order)
      }
      if (tableContent2.innerText === "‼️" && WAITER.style.left === "-120px" && WAITER.style.bottom === "170px") {
        order = Order.all.find(order => order.table === 2)
        displayOrder(order)
      }
      if (tableContent3.innerText === "‼️" && WAITER.style.left === "120px" && WAITER.style.bottom === "170px") {
        order = Order.all.find(order => order.table === 3)
        displayOrder(order)
      }
      if (tableContent4.innerText === "‼️" && WAITER.style.left === "360px" && WAITER.style.bottom === "170px") {
        order = Order.all.find(order => order.table === 4)
        displayOrder(order)
      }
      if (tableContent5.innerText === "‼️" && WAITER.style.left === "-360px" && WAITER.style.bottom === "-170px") {
        order = Order.all.find(order => order.table === 5)
        displayOrder(order)
      }
      if (tableContent6.innerText === "‼️" && WAITER.style.left === "-120px" && WAITER.style.bottom === "-170px") {
        order = Order.all.find(order => order.table === 6)
        displayOrder(order)
      }
      if (tableContent7.innerText === "‼️" && WAITER.style.left === "120px" && WAITER.style.bottom === "-170px") {
        order = Order.all.find(order => order.table === 7)
        displayOrder(order)
      }
      if (tableContent8.innerText === "‼️" && WAITER.style.left === "360px" && WAITER.style.bottom === "-170px") {
        order = Order.all.find(order => order.table === 8)
        displayOrder(order)
      }
  }

  async function findBar() {
      if (WAITER.style.left === "-540px" && WAITER.style.bottom === "150px") {
        const { value: formValues} = await Swal.fire({
            title: 'New Order',
            html: `<label for="Mimosa"style="width:200px;display:inline-block;padding:2px">Mimosa:</label><select name="Mimosa" id="Mimosa"><option value="Select">Select</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>` +
            `<label for="Bloody Mary"style="width:200px;display:inline-block;padding:2px">Bloody Mary:</label><select name="Bloody Mary" id="Bloody Mary"><option value="Select">Select</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>` +
            `<label for="Coffee"style="width:200px;display:inline-block;padding:2px">Coffee:</label><select name="Coffee" id="Coffee"><option value="Select">Select</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>` +
            `<label for="Beer"style="width:200px;display:inline-block;padding:2px">Beer:</label><select name="Beer" id="Beer"><option value="Select">Select</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>` +
            `<label for="House Martini"style="width:200px;display:inline-block;padding:2px">House Martini:</label><select name="House Martini" id="House Martini"><option value="Select">Select</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>` +
            `<label for="Sangria"style="width:200px;display:inline-block;padding:2px">Sangria:</label><select name="Sangria" id="Sangria"><option value="Select">Select</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>` +
            `<label for="Bourbon Brunch Cocktail"style="width:200px;display:inline-block;padding:2px">Bourbon Brunch Cocktail:</label><select name="Bourbon Brunch Cocktail" id="Bourbon Brunch Cocktail"><option value="Select">Select</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>` +
            `<label for="Pitcher of Mimosa"style="width:200px;display:inline-block;padding:2px">Pitcher of Mimosa:</label><select name="Pitcher of Mimosa" id="Pitcher of Mimosa"><option value="Select">Select</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>` +
            `<label for="Pitcher of Beer"style="width:200px;display:inline-block;padding:2px">Pitcher of Beer:</label><select name="Pitcher of Beer" id="Pitcher of Beer"><option value="Select">Select</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>` +
            `<label for="table"style="width:200px;display:inline-block;padding:8px">To Table Number:</label><select name="Table" id="Table"><option value="Select">Select</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option></select>`,
            focusConfirm: false,
            preConfirm: () => {
              return [
                document.getElementById('Mimosa').value + "Mimosa",
                document.getElementById('Bloody Mary').value + "Bloody Mary",
                document.getElementById('Coffee').value+ "Coffee",
                document.getElementById('Beer').value + "Beer",
                document.getElementById('House Martini').value + "House Martini",
                document.getElementById('Sangria').value + "Sangria",
                document.getElementById('Bourbon Brunch Cocktail').value + "Bourbon Brunch Cocktail",
                document.getElementById('Pitcher of Mimosa').value + "Pitcher of Mimosa",
                document.getElementById('Pitcher of Beer').value + "Pitcher of Beer",
                document.getElementById('Table').value
              ]
            }
          })
          if (formValues) {
              let tableOrder = Order.all.find(order => order.table === parseInt(formValues[9]), 10)
              let tableCustomer = Customer.all.find(e => e.id === tableOrder.customer)
              let newBarOrder = new Order(table = parseInt(formValues[9].charAt(0), 10), customer = tableCustomer)
             
              for (i=0;i<formValues.length - 1;i++) {
                if (formValues[i].charAt(0) !== "S") {
                    for (t=0;t<parseInt(formValues[i].charAt(0), 10);t++) {
                newBarOrder.items.push(Item.all.find(e => e.name === formValues[i].slice(1)))
                }
            }
            }
            let tableOrders = Order.all.filter(order => order.table === newBarOrder.table)
            if (tableOrders[0].table === tableOrders[1].table && tableOrders[0].customer === tableOrders[1].customer) {
                let firstItems = tableOrders[1].items.sort(function (a, b) {
                    return a.id - b.id;
                  })
                let secondItems = tableOrders[0].items.sort(function (a, b) {
                    return a.id - b.id;
                  })
                for (let i=0;i<firstItems.length;i++) {
                    if (firstItems[i] !== secondItems[i]) {
                        Swal.fire("Ouch! You got the order wrong!")
                    } else {
                        Swal.fire("Order Fulfilled!")
                        let tableOrderFilled = document.getElementById(`table-${tableOrders[0].table}-content`).firstChild
                        let emojiOrder = ""
                        if (tableOrders[1].items.length === 1) {
                            tableOrderFilled.innerText = tableOrders[1].items[0].icon
                        } else {
                        tableOrders[1].items.forEach(item => emojiOrder += `${item.icon}`)
                        tableOrderFilled.innerText = emojiOrder
                    }
                    }
                }
            }
          }
   }
  }
  