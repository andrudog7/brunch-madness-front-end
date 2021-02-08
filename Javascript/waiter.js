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
    })
  }
  
  function moveWaiterRight() {
    window.requestAnimationFrame(function() {
      const left = positionToInteger(WAITER.style.left)
  
      if (left < 400) {
        WAITER.style.left = `${left + 20}px`;
      }
    })
  }

  function moveWaiterDown() {
    window.requestAnimationFrame(function() {
      const bottom = positionToInteger(WAITER.style.bottom)
  
      if (bottom > -200) {
        WAITER.style.bottom = `${bottom - 20}px`;
      }
    })
  }
  
  function moveWaiterUp() {
    window.requestAnimationFrame(function() {
      const bottom = positionToInteger(WAITER.style.bottom)
  
      if (bottom < 200) {
        WAITER.style.bottom = `${bottom + 20}px`;
      }
    })
  }

  function positionToInteger(p) {
    return parseInt(p.split('px')[0]) || 0
  }