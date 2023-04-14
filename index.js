//................................................................
//..........declerations..........................................
//................................................................

let cards = []
let specialCards = ["Ace","Jack", "King", "Queen"]
let cardsValues = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let player = {
    name: "Per",
    chips: 200
}
const messageEl = document.getElementById("message-el")
const sumEl = document.getElementById("sum-el")
const cardsEl = document.getElementById("cards-el")
const playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

//................................................................
//..........An actual card from the deck..........................
//................................................................

let deckCard

//................................................................
//.......Starting the game........................................
//................................................................

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        getRandomCard()
        renderGame()        
    }
}

function startGame() {
    isAlive = true
    if (cards.length === 0){
        getRandomCard()
        getRandomCard()
    }
    renderGame()
}



//................................................................
//.......Card generator...........................................
//................................................................



function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        cards.push(specialCards[randomNumber-10])    
        sum += 10
    } else if (randomNumber === 1) {
        cards.push(specialCards[0])
        if (sum + 11 > 21){
            sum += 1
        } else{
            sum += 11
        }
    } else {
        cards.push(randomNumber)
        sum += randomNumber
    }
}


//................................................................
//..........rendering -Function...................................
//................................................................

function renderGame() {
    cardsEl.textContent = "Current cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}







