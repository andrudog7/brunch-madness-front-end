let totalTables = 0
let totalTips = 0
let totalMistakes = 0
let tableInterval

function startGame(e) {
    formatGameSidebar(e)
    startTimer()
    selectTable()
    tableInterval = setInterval(selectTable, 20000)
}

function formatGameSidebar(e) {
  //Update Sidebar
  let userArea = e.target.parentElement
  e.target.style.display = "none"
  const gameDisplay = document.querySelector('.restaurant')
  gameDisplay.style.display = "inline-block"

  //Game Header
  const gameHeader = document.createElement("h4")
  gameHeader.innerText = "Current Game"
  gameHeader.style.textAlign = "center"
    
  //Game Tips
  const gameTips = document.createElement("p")
  gameTips.id = "tipCount"
  gameTips.style.margin = "5px"
  gameTips.style.fontSize = "28px"
  gameTips.style.textAlign = "center"
  gameTips.innerText = `Tips: $0`

  //Game Tables Served
  const gameTablesServed = document.createElement("p")
  gameTablesServed.id = "tableCount"
  gameTablesServed.margin = "5px"
  gameTablesServed.style.fontSize = "28px"
  gameTablesServed.style.textAlign = "center"
  gameTablesServed.innerText = `Tables Served: 0`

  //Game Mistakes
  const gameMistakes = document.createElement("p")
  gameMistakes.id = "mistakes"
  gameMistakes.margin = "5px"
  gameMistakes.style.fontSize = "28px"
  gameMistakes.style.textAlign = "center"
  gameMistakes.innerText = `Mistakes: 0`

  //Game Timer Setup  
  const gameDuration = document.createElement("p")
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
    
  userArea.prepend(gameMistakes)
  userArea.prepend(gameTablesServed)
  userArea.prepend(gameTips)
  userArea.prepend(gameDuration)
  userArea.prepend(gameHeader)
}

// Timer Function
let x

function startTimer() {
    x = setInterval(timer, 10);
  } 

  function stopTimer() {
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
  document.getElementById("sec").innerHTML = secOut + ".";
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

function selectTable() {
    let randomNum = Math.floor(Math.random() * TABLES.length)
    table = TABLES[randomNum]
    TABLES.splice(randomNum, 1)
    const tableText = document.getElementById(`table-${table}`).children[0]

    if (tableText.innerText === "") {
      newCustomer = selectCustomer()
      tableText.innerText = newCustomer.name
      customerOrder(table, newCustomer)
    } else {
      orderMoreorRequestCheck(tableText)
    }
}

function orderMoreorRequestCheck(tableText) {
  let customer1 = Customer.all.find(e => e.name === tableText.innerText)
  let completedOrders = Table.all[table - 1].orders
  if (completedOrders.length >= 1) {
      let chance = Math.ceil(Math.random() * 2)
      if (chance === 1) {
         customerOrder(table, customer1) 
      }
      if (chance === 2) {
          let tableContent = document.getElementById(`table-${table}-content`).firstChild
          tableContent.innerText = "✍️"
      }
  }
}

function selectCustomer() {
    let customer = Customer.all[Math.floor(Math.random() * 12)]
    return customer
}

function addMistakes() {
  thisGameMistakes = document.getElementById('mistakes')
  thisGameMistakes.innerText = `Mistakes: ${totalMistakes+=1}`
  checkGameOver()
}

function checkGameOver() {
  if (totalMistakes === 3) {
    stopTimer()
    clearInterval(tableInterval)
    recordUserScore()
    Swal.fire({
      icon: "error",
      title: "You're Fired",
      html: `<p>Ooops! Sorry ${currentUser}, you made too many mistakes!</p><br><h4>Your final Score:</h4><br>Tips: $${totalTips}<br>Tables Served: ${totalTables}<br>Final Time: ${finalMin + finalSec + finalMilisec}`
    })
  }
}

function addTipsforClosedTable(moneyTable, tableContent) {
  tableContent.innerText = `#${moneyTable.number}`
  paidTableText = document.getElementById(`table-${moneyTable.number}`).children[0]
  paidTableText.innerText = ""
  calculateTotalTips(moneyTable)
  moneyTable.orders = []
}

function payWithCashOrCard(tableContent) {
  let chance = Math.ceil(Math.random() * 2)
  if (chance === 1) {
    tableContent.innerText = "💳"
  }
  if (chance === 2) {
    tableContent.innerText = "💵"
  }
}

function rectifyCheck(formValues) {
  if (formValues[0].charAt(0) !== "S") {
    let checkTable = Table.all.find(t => t.number === parseInt(formValues[0].charAt(0)))
    let tableContent = document.getElementById(`table-${checkTable.number}-content`).firstChild
    if (tableContent.innerText === "✍️") {
        Swal.fire({
            icon: "success",
            text: `The check has been delivered for table #${checkTable.number}`
        })
        setTimeout(payWithCashOrCard.bind(null, tableContent), Math.ceil(Math.random() * 10000))
    } else {
        Swal.fire({
            icon: "error",
            text: `Ooops! Table #${checkTable.number} did not request the check yet!`
        })
        addMistakes()
        }
}
}

function rectifyPayment(formValues) {
  if (formValues[1].charAt(0) !== "S") {
    let moneyTable = Table.all.find(t => t.number === parseInt(formValues[1].charAt(0)))
    let tableContent = document.getElementById(`table-${moneyTable.number}-content`).firstChild
    if ((tableContent.innerText === "💵") || (tableContent.innerText === "💳")) {
        Swal.fire({
            icon: "success",
            text: `Congratulations, table #${moneyTable.number} has closed out!`
        })
        addTipsforClosedTable(moneyTable, tableContent)
        addTableServed()
        TABLES.push(moneyTable.number)
        
    } else {
        Swal.fire({
            icon: "error",
            text: `Ooops! Table #${moneyTable.number} has not paid yet!`
        })
        addMistakes()
    }
}
}

function removeOrder(tableOrderFilled, thisTable, thisTableOrder) {
  tableOrderFilled.innerText = `#${thisTable}`
  TABLES.push(thisTable)
  Table.all.find(table => table.number === thisTable).orders.push(thisTableOrder)
}

function displayOrderToTable(thisTableOrder, tableOrderFilled) {
  let emojiOrder = ""
  if (thisTableOrder.items.length === 1) {
    addTips()
    tableOrderFilled.innerText = thisTableOrder.items[0].icon
  } else {
    thisTableOrder.items.forEach(item => emojiOrder += `${item.icon}`)
    tableOrderFilled.innerText = emojiOrder
    let tablesServed
    let tipsEarned 
    addTips()
  }
}

function addTips() {
  tipsEarned = document.getElementById('tipCount')
  tipsEarned.innerText = `Tips: $${totalTips+=1}`
}

function addTableServed() {
  tablesServed = document.getElementById('tableCount')
  tablesServed.innerText = `Tables Served: ${totalTables+=1}`
}