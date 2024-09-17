// append and append child

// def => add something to the end of written document

// Example=>we have three element in the page h1,container,card
// card child of container
// now if we want to add h1 in the last of container then we will use append

// *** appendChild
// it is working like cut paste , it add element in the end of selected element and delete from previous place

// Ex- work by variables (like we also make variable and now use them)
const h1 = document.querySelector('h1')
const container = document.querySelector('.container')
const card = document.querySelector('.card')

// container.appendChild('h1') // in this container variable append h1 into container

//** h1.cloneNode(true)=> by cloneNode it giving copy of selected item and then we will use of copy without touching original

// with clone => container.appendChild(h1.cloneNode(true))

// task

// for (let i = 2; i <= 100; i++) {
//   const newCard = card.cloneNode()
//   newCard.innerText = i
//   container.appendChild(newCard)
// }

// *** append
// from it we are able to append anything => string,node,multiple things together

// diffs b/w append and appendChild

// * Element.append() has no return value, whereas Node.appendChild() returns the appended Node object.
// * Element.append() allows you to also append string objects, whereas Node.appendChild() only accepts Node objects.
// * Element.append() can append several nodes and strings, whereas Node.appendChild() can only append one node.

// Ex=> container.append('h1','satyam','jai ho')
