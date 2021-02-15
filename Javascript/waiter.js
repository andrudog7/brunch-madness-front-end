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
  
      if (left > -560) {
        WAITER.style.left = `${left - 40}px`;
      }
      findOrder()
      findBar()
      findRegister()
    })
  }
  
  function moveWaiterRight() {
    window.requestAnimationFrame(function() {
      const left = positionToInteger(WAITER.style.left)
  
      if (left < 400) {
        WAITER.style.left = `${left + 40}px`;
      }
      findOrder()
      findBar()
      findRegister()
    })
  }

  function moveWaiterDown() {
    window.requestAnimationFrame(function() {
      const bottom = positionToInteger(WAITER.style.bottom)
  
      if (bottom > -145) {
        WAITER.style.bottom = `${bottom - 35}px`;
      }
      findOrder()
      findBar()
      findRegister()
    })
  }
  
  function moveWaiterUp() {
    window.requestAnimationFrame(function() {
      const bottom = positionToInteger(WAITER.style.bottom)
  
      if (bottom < 200) {
        WAITER.style.bottom = `${bottom + 35}px`;
      }
      findOrder()
      findBar()
      findRegister()
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
    let orderEmojis = ["🤗", "😬", "🙄", "😡", "🤬"]
      if (orderEmojis.find(e => e === tableContent1.innerText) && (WAITER.style.left === "-360px") && (WAITER.style.bottom === "170px")) {
        displayOrder(Order.tableLastOrder(1))
      }
      if (orderEmojis.find(e => e === tableContent2.innerText) && WAITER.style.left === "-120px" && WAITER.style.bottom === "170px") {
        displayOrder(Order.tableLastOrder(2))
      }
      if (orderEmojis.find(e => e === tableContent3.innerText) && WAITER.style.left === "120px" && WAITER.style.bottom === "170px") {
        displayOrder(Order.tableLastOrder(3))
      }
      if (orderEmojis.find(e => e === tableContent4.innerText) && WAITER.style.left === "360px" && WAITER.style.bottom === "170px") {
        displayOrder(Order.tableLastOrder(4))
      }
      if (orderEmojis.find(e => e === tableContent5.innerText) && WAITER.style.left === "-360px" && WAITER.style.bottom === "-145px") {
        displayOrder(Order.tableLastOrder(5))
      }
      if (orderEmojis.find(e => e === tableContent6.innerText) && WAITER.style.left === "-120px" && WAITER.style.bottom === "-145px") {
        displayOrder(Order.tableLastOrder(6))
      }
      if (orderEmojis.find(e => e === tableContent7.innerText) && WAITER.style.left === "120px" && WAITER.style.bottom === "-145px") {
        displayOrder(Order.tableLastOrder(7))
      }
      if (orderEmojis.find(e => e === tableContent8.innerText) && WAITER.style.left === "360px" && WAITER.style.bottom === "-145px") {
        displayOrder(Order.tableLastOrder(8))
      }
  }

  async function findBar() {
      if (WAITER.style.left === "-560px" && WAITER.style.bottom === "135px") {
        const { value: formValues} = await Swal.fire({
            title: 'New Order',
            showCancelButton: 'true',
            html: `<label for="table"style="font-weight:bold;width:200px;display:inline-block;padding:8px">Table #</label><select name="Table" id="Table"><option value="Select">Select</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option></select>` +
            `<label for="Beer"style="width:200px;display:inline-block;padding:2px">Beer:</label><select name="Beer" id="Beer"><option value="Select">Select</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>` +
            `<label for="Bloody Mary"style="width:200px;display:inline-block;padding:2px">Bloody Mary:</label><select name="Bloody Mary" id="Bloody Mary"><option value="Select">Select</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>` +
            `<label for="Bourbon Brunch Cocktail"style="width:200px;display:inline-block;padding:2px">Bourbon Brunch Cocktail:</label><select name="Bourbon Brunch Cocktail" id="Bourbon Brunch Cocktail"><option value="Select">Select</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>` +
            `<label for="Coffee"style="width:200px;display:inline-block;padding:2px">Coffee:</label><select name="Coffee" id="Coffee"><option value="Select">Select</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>` +
            `<label for="House Martini"style="width:200px;display:inline-block;padding:2px">House Martini:</label><select name="House Martini" id="House Martini"><option value="Select">Select</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>` +
            `<label for="Mimosa"style="width:200px;display:inline-block;padding:2px">Mimosa:</label><select name="Mimosa" id="Mimosa"><option value="Select">Select</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>` +
            `<label for="Sangria"style="width:200px;display:inline-block;padding:2px">Sangria:</label><select name="Sangria" id="Sangria"><option value="Select">Select</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>` +
            `<label for="Pitcher of Beer"style="width:200px;display:inline-block;padding:2px">Pitcher of Beer:</label><select name="Pitcher of Beer" id="Pitcher of Beer"><option value="Select">Select</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>` +
            `<label for="Pitcher of Mimosa"style="width:200px;display:inline-block;padding:2px">Pitcher of Mimosa:</label><select name="Pitcher of Mimosa" id="Pitcher of Mimosa"><option value="Select">Select</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>`,
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
            barOrderItems = barItemsOrdered(formValues)
              
            let thisTable = parseInt(formValues[9])
            let tableOrders = Order.all.filter(order => order.table === thisTable)
            let thisTableOrder = tableOrders[tableOrders.length - 1]
            
            if (tableOrders.length === 0) {
              Swal.fire({
                icon: "error",
                text: `Ouch! Table #${thisTable} doesn't have any orders!`})
                let thisGameMistakes
                addMistakes()
            } else {
            if (thisTableOrder.table === thisTable) {
              let firstItems = thisTableOrder.items.sort(function (a, b) {
                return a.id - b.id;
              })
              let secondItems = barOrderItems.sort(function (a, b) {
                return a.id - b.id;
              })
              compareArray = compareOrders(firstItems, secondItems)
                  
              if (compareArray.find(e => e === "false")) {
                Swal.fire({
                  icon: "error",
                  text: "Ouch! You got the order wrong!"})
                  addMistakes()
              } else {
                Swal.fire({
                  icon: "success",
                  text: "Order Fulfilled!"})
                let tableOrderFilled = document.getElementById(`table-${thisTableOrder.table}-content`).firstChild
                displayOrderToTable(thisTableOrder, tableOrderFilled)
                setTimeout(removeOrder.bind(null, tableOrderFilled, thisTable, thisTableOrder), randomInteger(15000, 50000))
                compareArray = []
              }
            }
            }
          }
      }
  }

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

async function findRegister() {       
    if (WAITER.style.left === "-560px" && WAITER.style.bottom === "-145px"){
      const { value: formValues} = await Swal.fire({
        title: 'Register',
        showCancelButton: 'true',
        html: `<label for="check"style="width:200px;display:inline-block;padding:8px">Give Check to:</label><select name="check" id="check"><option value="Select">Select</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option></select>` +
        `<label for="money"style="width:200px;display:inline-block;padding:8px">Close Out:</label><select name="money" id="money"><option value="Select">Select</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option></select>`,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('check').value + "Check",
            document.getElementById('money').value + "Money"
          ]
        }
      })
          if (formValues) {
            rectifyCheck(formValues)
            rectifyPayment(formValues)
          }
    }
  } 