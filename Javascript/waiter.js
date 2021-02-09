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

  function findBar() {
      if (WAITER.style.left === "-540px" && WAITER.style.bottom === "150px") {
        Swal.fire("New Order:",
        `${Item.displayItemForm()}`)
      }
  }

  