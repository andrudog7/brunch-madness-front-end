const submitBtn = document.getElementById('submit-btn')
const usernameInput = document.getElementById('username')
submitBtn.addEventListener('click', getUserData)
let currentUser
let currentUserId
let finalMin 
let finalSec
let finalMilisec
let currentGameId = 0

function getUserData(e) {
    if (e) {
    e.preventDefault()}

    let userObj = {
        username: usernameInput.value
    }
    
    let configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userObj)
    }

    fetch(`http://127.0.0.1:3000/users`, configObj)
    .then(response => response.json())
    .then(userData => createUserScores(userData))
}

function createUserScores(userInfo) {
    const loginForm = document.getElementById('login-form')
    const userInfoDiv = document.getElementById('user-info')
    userInfoDiv.style.marginTop = "-25px"
    let h3 = document.createElement('h3')
    let h5 = document.createElement('h5')
    let ol = document.createElement('ol')
    ol.style.marginBottom = "0px"
    let playBtn = document.createElement('button')
    playBtn.textContent = checkIfCurrentGame() 
    playBtn.id = "play-button"
    playBtn.style.marginLeft = "35px"

    loginForm.style.display = "none"
    
    currentUser = userInfo.username
    currentUserId = userInfo.id
    let currentUserDiv = document.createElement("div")
    currentUserDiv.id = "current-user-div"
    h3.innerText = `${userInfo.username}`
    h3.style.textAlign = "center"
    h3.style.marginTop = "15px"
    h5.innerText = "My High Scores"
    h5.style.textAlign = "center"
    h5.style.margin = "2px"
    h5.style.marginTop = "15px"
    userInfoDiv.append(currentUserDiv)
    currentUserDiv.append(h3)
    currentUserDiv.append(h5)
    if (userInfo.highest_tips !== []) {
    userInfo.highest_tips.forEach(score => {
        let li = document.createElement('li')
        li.id = score.id
        li.innerText = `Tips: $${score.tips}, Tables: ${score.tables_served}`
        ol.appendChild(li)
    })
    currentUserDiv.append(ol)
    currentUserDiv.append(playBtn)
    checkCurrentScore()
    playBtn.addEventListener('click', startGame)
}
}

function recordUserScore() {
    finalMin = document.getElementById('min').innerText
    finalSec = document.getElementById('sec').innerText
    finalMilisec = document.getElementById('milisec').innerText
    let userObj = {
        duration: "00:" + finalMin + finalSec + finalMilisec,
        tips: totalTips,
        tables_served: totalTables
    }
    
    let configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userObj)
    }

    fetch(`http://127.0.0.1:3000/users/${currentUserId}/scores`, configObj)
    .then(response => response.json())
    .then(userData => handleNewScore(userData))
}

function handleNewScore(userData) {
    currentGameId = userData.id
    let currentUserDiv = document.getElementById('current-user-div')
    currentUserDiv.style.display = "none"
    getUserData()
}

function checkCurrentScore() {
    let element = document.getElementById(`${currentGameId}`)
    if(typeof(element) != 'undefined' && element != null){
        element.style.backgroundColor = "greenyellow"
        element.style.fontWeight = "bold"
    }
}

function checkIfCurrentGame() {
    let element = document.getElementById("current-game")
    if(typeof(element) != 'undefined' && element != null){
        return "Play Again"
    } else {
        return "Play New Game"
    }
}