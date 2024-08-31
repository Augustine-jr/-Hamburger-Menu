/*these variables are used to store references to various elements on the page that are involved in the functionality
of the navigation menu and its components. 
By assigning them to variables, i can easily manipulate these elements with JavaScript in the rest of your code.*/ 

//This line selects the first element in the document with the class menu-toggle and assigns it to the variable menuTog
let menuTog = document.querySelector('.menu-toggle');

//This line selects the first element with the class nav and assigns it to the variable nav.
let nav = document.querySelector('.nav');

// This line selects the first element with the class nav-left and assigns it to the variable navLeft.
//This represents the left portion of the navigation menu, which might slide in or out when toggled.
let navLeft = document.querySelector('.nav-left');

//This line selects the first element with the class nav-right and assigns it to the variable navRight.
//This represents the right portion of the navigation menu, which might also slide in or out when toggled.
let navRight = document.querySelector('.nav-right');


//This line selects all elements with the class nav-link and converts the NodeList to an Array, assigning it to the variable navLink.
//These are the individual links within the navigation menu that might need to be manipulated or styled.
let navLink = Array.from(document.querySelectorAll('.nav-link'));

// This line selects the first element with the class contact and assigns it to the variable contact.
let contact = document.querySelector('.contact');

//  This line selects the first element with the class logo and assigns it to the variable logo
let logo = document.querySelector('.logo');


menuTog.addEventListener('click', () => { // this line attaches an event listener to the menuTog element (which represents the menu toggle button).
         //The event listener is listening for a 'click' event, which means the code inside the function will run every time the menuTog element is clicked
   // This will add the 'active' class if it doesn't exist, 
  // or remove it if it does, allowing for  triggering animations like rotation.
  menuTog.classList.toggle('active'); 
  
  // This line toggles the 'active' class on the nav element (which represents the navigation menu itself)
  nav.classList.toggle('active'); 
  
  // This line toggles the 'active' class on the navLeft and navRight elements (which represent the left and right portions of the navigation menu)
  navLeft.classList.toggle('active'); 
  navRight.classList.toggle('active');
  
  // This line toggles the 'active' class on the contact element (which represents the contact section)
  contact.classList.toggle('active');
  
  // This line toggles the 'active' class on the logo element (which represents the logo)
  logo.classList.toggle('active');
  
  // This line loops over each link in the navLink array and toggles the 'active' class on it.
  navLink.forEach(link => link.classList.toggle('active'));
});