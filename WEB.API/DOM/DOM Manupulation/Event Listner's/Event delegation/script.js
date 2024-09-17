const card = document.querySelector('.card')

const container = document.querySelector('.container')

let count = 1

card.addEventListener('click', () => {
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.innerText = count++
  container.append(newCard)
})

// ********** Event Delegation
// it is a way to optimizing our code
// when we do same work by parent event which we did by child's events (create one event on parent which manipulate all child)

// now we delete card when we click on them by the container event which is parent of cards

// first we need to out plus card from container
container.addEventListener('click', (e) => {
  if (e.target !== container) {
    e.target.remove()
  }
})
