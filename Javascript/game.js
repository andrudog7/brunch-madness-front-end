function startGame(e) {
    let userArea = e.target.parentElement
    e.target.style.display = "none"

    const gameHeader = document.createElement("h4")
    gameHeader.innerText = "Current Game"
    gameHeader.style.textAlign = "center"
    
    const gameDuration = document.createElement("p")
    const gameTips = document.createElement("p")
    const gameTablesServed = document.createElement("p")
    const timerMilisec = document.createElement("span")
    timerMilisec.id = "milisec"
    timerMilisec.innerText = "00"
    const timerSec = document.createElement("span")
    timerSec.id = "sec"
    timerSec.innerText = "00:"
    const timerMinute = document.createElement("span")
    timerMinute.id = "min"
    timerMinute.innerText = "00:"
    gameDuration.innerText = "Time: "
    gameDuration.style.fontSize = "28px"
    gameDuration.style.textAlign = "center"
    gameDuration.style.marginLeft = "13px"
    gameDuration.append(timerMinute)
    gameDuration.append(timerSec)
    gameDuration.append(timerMilisec)
    userArea.appendChild(gameHeader)
    userArea.appendChild(gameDuration)
    startTimer()
    selectTable()
    gameTips.id = "tipCount"
    gameTablesServed.id = "tableCount"
    gameTips.style.margin = "5px"
    gameTablesServed.margin = "5px"
    gameTips.style.fontSize = "28px"
    gameTablesServed.style.fontSize = "28px"
    gameTips.style.textAlign = "center"
    gameTablesServed.style.textAlign = "center"
    gameTips.innerText = `Tips: $ tip variable`
    gameTablesServed.innerText = `Tables Served: table variable`
    userArea.appendChild(gameTips).appendChild(gameTablesServed)
}
// Timer Function
let x

function startTimer() {
    x = setInterval(timer, 10);
  } 

  function stop() {
    clearInterval(x);
  }

    let milisec = 0;
    let sec = 0; 
    let min = 0;

    let miliSecOut = 0;
    let secOut = 0;
    let minOut = 0;

function timer() {
  miliSecOut = checkTime(milisec);
  secOut = checkTime(sec);
  minOut = checkTime(min);

  milisec = ++milisec;

  if (milisec === 100) {
    milisec = 0;
    sec = ++sec;
  }

  if (sec == 60) {
    min = ++min;
    sec = 0;
  }

  document.getElementById("milisec").innerHTML = miliSecOut;
  document.getElementById("sec").innerHTML = secOut + ":";
  document.getElementById("min").innerHTML = minOut + ":";
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function reset() {

  milisec = 0;
  sec = 0;
  min = 0

  document.getElementById("milisec").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";

}

let TABLES = [1, 2, 3, 4, 5, 6, 7, 8]
let currentTables = []

function selectTable() {
    let table = TABLES[Math.floor(Math.random() * TABLES.length)]
    currentTables = TABLES.splice((table), 1)
    const tableText = document.getElementById(`table-${table + 1}`).children[0]
    customer = selectCustomer()
    tableText.innerText = customer.name
    customerOrder(table, customer)
}

function selectCustomer() {
    let customer = Customer.all[Math.floor(Math.random() * 16)]
    return customer
}

function customerOrder(table, customer) {
    numberOfItems = Math.floor(Math.random() * 6)
    let order = new Order(table = (table + 1), customer = customer)
    for (i = 0; i <= numberOfItems; i++) {
        order.items.push(Item.all[Math.floor(Math.random() * 9)])
    }
    let tableContent = document.getElementById(`table-${table}-content`).firstChild
    setTimeout(function() {
        tableContent.innerText = "‼️"}, 2500)
    tableContent.addEventListener('click', displayOrder.bind(null, order))
}

function displayOrder(order) {
    console.log(order)
}