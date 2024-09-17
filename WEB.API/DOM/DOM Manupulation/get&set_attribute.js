// ********** Attribute
// definition => anything what we pass in open bracket of any tag called attribute
// ex-> <h1 class="satyam"></h1>    => here class is an ex of attribute and satyam value of it

// see properties (without console.dir)

// if we want to see all property of html element without doing console.dir then click of that
// element and go where style tab and then go forward from style tab and click on properties tab
// their you can easily see all properties of elements

// *********** Main topic (set and get attribute)

// *** understand this First !!!!!!!!!
// we will normally access those attributes and also change their value which are popular in HTML, without using any method
// like class , id , title , src etc.

// Ex=> To access value
//  document.querySelector('tag name').attributeName

// Ex=> To change value
//  document.querySelector('tag name').attributeName='new value'

//*** To get attributes and their values which are not popular

// To get attribute value
// document.querySelector('tag name').getAttribute('attribute name')
// Ex=>   document.querySelector('h1').getAttribute('class')        // it show class name of h1 element

// To set attribute
// document.querySelector('tag name').setAttribute('attribute name','attribute value')

// Ex=> document.querySelector('h1').setAttribute('id','hello')
