document.addEventListener('DOMContentLoaded', function(){
    fetchCustomers()
    fetchItems()
    fetchHighScores()
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



