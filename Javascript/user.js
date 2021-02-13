const submitBtn = document.getElementById('submit-btn')
const usernameInput = document.getElementById('username')
submitBtn.addEventListener('click', getUserData)
let currentUser
let currentUserId
let finalMin 
let finalSec
let finalMilisec

function getUserData(e) {
    e.preventDefault()

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
    let h3 = document.createElement('h3')
    let h5 = document.createElement('h5')
    let ol = document.createElement('ol')
    ol.style.marginBottom = "0px"
    let playBtn = document.createElement('button')
    playBtn.textContent = "Play New Game"
    playBtn.id = "play-button"
    playBtn.style.marginLeft = "42px"

    loginForm.style.display = "none"
    
    currentUser = userInfo.username
    currentUserId = userInfo.id
    h3.innerText = `${userInfo.username}`
    h3.style.textAlign = "center"
    h3.style.marginTop = "15px"
    h5.innerText = "My High Scores"
    h5.style.textAlign = "center"
    h5.style.margin = "2px"
    h5.style.marginTop = "15px"
    userInfoDiv.append(h3)
    userInfoDiv.append(h5)
    if (userInfo.highest_tips !== []) {
    userInfo.highest_tips.forEach(score => {
        let li = document.createElement('li')
        li.innerText = `Tips: $${score.tips}, Tables: ${score.tables_served}`
        ol.appendChild(li)
    })
    userInfoDiv.append(ol)
    userInfoDiv.append(playBtn)
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
    .then(userData => console.log(userData))
}