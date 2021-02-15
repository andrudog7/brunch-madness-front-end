document.addEventListener('DOMContentLoaded', function(){
    fetchCustomers()
    fetchItems()
    fetchHighScores()
    fetchMusic()
})

function fetchHighScores() {
    fetch(`http://127.0.0.1:3000/high_scores`)
    .then(response => response.json())
    .then(highScores => displayHighScores(highScores))
}

function displayHighScores(highScores) {
    let highScoresDiv = document.getElementById('high-scores')
    let ol = document.createElement('ol')
    ol.style.paddingInlineStart = "20px"
    highScoresDiv.append(ol)
    highScores.forEach(score => {
        let li = document.createElement('li')
        let p1 = document.createElement('p')
        p1.style.margin = "0px"
        p1.style.marginLeft = "5px"
        p1.style.fontWeight = "bold"
        let p2 = document.createElement('p')
        p2.style.margin = "0px"
        p2.style.marginLeft = "5px"
        li.style.textDecoration = "none"
        li.style.fontSize = "16px"
        li.style.textAlign = "left"
        p2.innerText = `Tips: $${score.tips}, Tables: ${score.tables_served}` 
        p1.innerText = `${score.user.username}`
        li.append(p1)
        li.append(p2)
        ol.append(li)
    })
}

let howToPlay = document.getElementById('how-to')
howToPlay.addEventListener('click', displayInstructions)

function displayInstructions() {
    Swal.fire({
        icon: "info",
        title: "How to Play Brunch Madness",
        html: "<p>Brunch Madness is a game where you act as the waiter during a very busy brunch period.  Make 3 mistakes and you're fired!<br><br>Use the following keys to move around the restaurant:<br>⬇️➡️⬅️⬆️<br><br>When a customer has placed an order, an emoji will appear on their table.  Move the waiter to the emoji to access the order.  Then move the waiter to the bar entrance to fulfill the order.  You have 60 seconds to complete the order or it will count as a mistake.  The emoji expression will change with time:<br><br>🤗 - Initial order has been placed<br>😬 - Customer is still happy and waiting<br>🙄 - Getting slightly annoyed by the waiting<br>😡 - The customer is getting angry (40 seconds have passed)<br>🤬 - The customer is really upset and you have 10 seconds to complete the order<br><br>Once an order has been filled, the customer will either choose to place another order or signal they are ready for the check with ✍️.  You will need to access the register to give the check and also receive payment when the customer puts their money on the table.<br><br>Score: You get a $1 tip for every order you get right.  Once a table has closed out you will also get 20% of their total bill added to your tips.<br><br>Try to get a high score by making the most in tips!</p>"})
}

function fetchMusic() {
    let configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: {"grant_type": "client_credentials"}
    }
    fetch('http://accounts.spotify.com/api/token')
    .then(response => response.json())
    .then(info => console.log(info))
}

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





