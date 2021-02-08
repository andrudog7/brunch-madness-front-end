function startGame(e) {
    let userArea = e.target.parentElement
    e.target.style.display = "none"

    const gameHeader = document.createElement("h4")
    gameHeader.innerText = "Current Game"
    gameHeader.style.textAlign = "center"
    
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
    userArea.appendChild(gameHeader)
    userArea.appendChild(gameDuration)
    startTimer()
}

let x

function startTimer() {
    x = setInterval(timer, 10);
  } /* Start */

  function stop() {
    clearInterval(x);
  } /* Stop */


    let milisec = 0;
    let sec = 0; /* holds incrementing value */
    let min = 0;

/* Contains and outputs returned value of  function checkTime */

    let miliSecOut = 0;
    let secOut = 0;
    let minOut = 0;

/* Output variable End */
  /* Main Timer */
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

/* Adds 0 when value is <10 */

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function reset() {


  /*Reset*/

  milisec = 0;
  sec = 0;
  min = 0

  document.getElementById("milisec").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";

}