import { pageLoad } from './modules/initialload'
import { container } from './modules/contact'
import { render } from './modules/menu'    

    // Main container IFFE
    let main = (function(){
        const mainContainer = document.querySelector("#content");

        return {mainContainer}
    })();
    

    // Creating buttons
    let buttons = (function(){

        const menuButton = document.createElement("button")
        const contactButton = document.createElement("button")
        const initialButton = document.createElement("button")
        const buttonsContainer = document.createElement("div")

        buttonsContainer.setAttribute("id","buttons-container")
        buttonsContainer.append(menuButton,contactButton,initialButton)
        main.mainContainer.appendChild(buttonsContainer)

        menuButton.textContent = "Menu"
        contactButton.textContent = "Contact"
        initialButton.textContent = "Home"

        contactButton.setAttribute("id","contact")
        initialButton.setAttribute("id","home")
        menuButton.setAttribute("id","menu")

        main.mainContainer.appendChild(pageLoad())

        let nodes = document.getElementById("buttons-container").childNodes;
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].setAttribute("class","button")
        }

        return {buttonsContainer,menuButton,contactButton,initialButton}
    })();


    // Event listeners
    (function () {
        let initalCount = 1;
        let contactCount = 0;
        let menuCount = 0;

        buttons.contactButton.addEventListener("click",function(e){
            if (contactCount === 0) {
                main.mainContainer.innerText = ""
                main.mainContainer.appendChild(buttons.buttonsContainer)
                main.mainContainer.appendChild(container())
                let creatingClasses = document.getElementById("form-container").childNodes;
                for (let i = 0; i < creatingClasses.length; i++) {
                    if (i === creatingClasses.length - 1) {
                        creatingClasses[i].setAttribute("class","button")
                    } else {
                        creatingClasses[i].setAttribute("class","form-field")
                    }
                }
                contactCount++
            }
            count(e.target.id)  
        })
    
        buttons.menuButton.addEventListener("click",function(e){
            if (menuCount === 0) {
                main.mainContainer.innerText = ""
                main.mainContainer.appendChild(buttons.buttonsContainer)
                main.mainContainer.appendChild(render())
                menuCount++
            }
            count(e.target.id)
        })

        buttons.initialButton.addEventListener("click",function(e){
            if (initalCount === 0) {
                main.mainContainer.innerText = ""
                main.mainContainer.appendChild(buttons.buttonsContainer)
                main.mainContainer.appendChild(pageLoad())
                initalCount++
            }
            count(e.target.id)
          
        })

        function count (currentId){
            if (currentId === "contact"){
              initalCount = 0;
              menuCount = 0;
            } else if (currentId === "home") {
                contactCount = 0;
                menuCount = 0;
            } else if (currentId === "menu") {
              initalCount = 0;
              contactCount = 0;
            }
         }
    })();
  
// create a bare - bones homepage for a resturant.
// Include an Image, Headline, and some copy. (its okay to hard code to html)

// Remove those elements from the HTML, and create them using javascript only - 
// Append those elements to the div content once the page is first loaded.
// Write the initial page-load function inside of its own module, and then import and call it inside of index.js


// Delete the HTML and instead creat them Using JS only - append each element to the div#content.
// Write this initial page load function inside of its own module and then import and call it inside of index.js

// Use a tabbed browsing
// put the content of each tab inside of its own module
// each module will export a function that creates a div elements, adds the appropriate content and styles to that element and then appends it to the dom.


// Write the tab switching logic inside of index.js - 
// YOu should have event listener for each tab - that switch the current content and then runs the correct tab module to populate it agin



// style the pages // V
// add some content  // V - NO NEED
// make it responsive // V
// fix your code ( make it clear) // V
// upload to gitHub