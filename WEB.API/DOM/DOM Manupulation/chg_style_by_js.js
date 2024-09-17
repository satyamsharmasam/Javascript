// ************** Change styles by JS
// By js we will only access inline styles

// *** Access styles

// document.querySelector('tag name').style

//  Ex=> document.querySelector('h1').style => it shows all css property which is apply on h1 in inline manner

// *** change styles
// document.querySelector('tag name').style.propertyName ='write what you want'

// Ex=>  document.querySelector('h1').style.color ='red'

//
//
//

// ******* Practical Example ( change multiple element styles in simple way)
// In this we will change and give many properties to all ( a ) tags in page
// in this case we provide class name from css file and apply all property which is written in css class on selecting item

const allLinks = document.querySelectorAll('a')

// for (const links of allLinks) {
//     links.classList.add(class name)   to add class on all a element in page
//     links.classList.remove(class name)   to remove exist class from a tag
//     links.classList.toggle(class name)   if class exist then remove it and if class not exist then add it
// }

// to assign any id to value
// allLinks.id='links'
