const avocados      = document.querySelectorAll('.avocado')
const scoreBoard    = document.querySelector('#score')
const button        = document.querySelector('button')
let remainingPeeps  = 10
let score           = 0

function randomAvocado() {
  const index = Math.floor(Math.random() * avocados.length)
  return avocados[index]
}

function sprout(avocado){
  avocado.classList.add('up')
}

function shrink(avocado){
  avocado.classList.remove('up')
}

function bonk(avocado) {
  shrink(avocado)
  score++
  scoreBoard.textContent = score
}

function peep(avocado) {
  remainingPeeps--
  sprout(avocado)
  setTimeout(() => { shrink(avocado) }, 800)
  if(remainingPeeps > 0){
    const avocado = randomAvocado()
    setTimeout(() => { peep(avocado) }, 1000)
  }
}

function startGame() {
  button.disabled = true
  const avocado = randomAvocado()
  peep(avocado)
}
