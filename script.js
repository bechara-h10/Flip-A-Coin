let heads = 0
let tails = 0
const coinsContainer = document.querySelector('.coins-container')
const flipButton = document.querySelector('.flip-button')
const resetButton = document.querySelector('.reset-button')
const headsScore = document.querySelector('.heads-score p')
const tailsScore = document.querySelector('.tails-score p')

flipButton.addEventListener('click', () => {
  coinsContainer.style.animation = ''
  let i = Math.floor(Math.random() * 2)
  if (i) {
    setTimeout(() => {
      flipButton.disabled = true

      coinsContainer.style.animation = 'spin-heads 3s ease-in-out forwards'
    }, 100)
    heads++
  } else {
    setTimeout(() => {
      flipButton.disabled = true
      coinsContainer.style.animation = 'spin-tails 3s ease-in-out forwards'
    }, 100)
    tails++
  }
  setTimeout(() => {
    if (i) {
      headsScore.textContent = `Heads: ${heads}`
    } else {
      tailsScore.textContent = `Tails: ${tails}`
    }
    flipButton.disabled = false
  }, 3000)
})

resetButton.addEventListener('click', () => {
  heads = 0
  tails = 0
  coinsContainer.style.animation = ''
  headsScore.textContent = 'Heads: 0'
  tailsScore.textContent = 'Tails: 0'
})
