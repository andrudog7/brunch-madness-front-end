const submitBtn = document.getElementById('submit-btn')
const usernameInput = document.getElementById('username')

submitBtn.addEventListener('click', getUserData)

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
    let h4 = document.createElement('h4')
    let ol = document.createElement('ol')
    let playBtn = document.createElement('button')
    playBtn.textContent = "Play New Game"
    playBtn.id = "play-button"
    playBtn.style.marginLeft = "42px"

    loginForm.style.display = "none"
    h3.innerText = `${userInfo.username}`
    h3.style.textAlign = "center"
    h4.innerText = "Top 5 Games"
    h4.style.textAlign = "center"
    userInfoDiv.append(h3)
    userInfoDiv.append(h4)
    if (userInfo.highest_tips !== []) {
    userInfo.highest_tips.forEach(score => {
        let li = document.createElement('li')
        li.innerText = `Tips: $${score.tips}, Tables: ${score.tables_served}`
        ol.appendChild(li)
    })
    userInfoDiv.append(ol)
    userInfoDiv.append(playBtn)
}
}