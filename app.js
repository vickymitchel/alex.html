
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score1')

let result = 0

function randomSquare () {

    squares.forEach(square => {
        square.classList.remove('mole')
    })


let randomSquare = squares[Math.floor(Mathe.random() * 9)]
    randomSquare.classList.add('mole')
}

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 500)
        
    }

moveMole()

