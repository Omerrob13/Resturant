let createHeading = function (text) {

    const heading = document.createElement("h1")
    heading.textContent = text
    heading.classList.add("title")

    return heading
}

let createDetails = function(){
    const details = document.createElement("div")
    const adress = document.createElement("div");
    const openingHours = document.createElement("div");
    const telephone = document.createElement("div");

    details.classList.add("details-container")
    adress.innerHTML = 
    "<p> NY, United States Of America </p>"
    "<p>Habima, 53, near the sea</p>"

    openingHours.innerHTML = 
    "<p> Sunday - Thursday: 8AM - 8PM </p>"
    "<p> Thursday - Saturday: 8AM - 4PM </p>"

    telephone.innerHTML = 
    "<p> Call now! 0555444333 </p>"

    details.append(adress,openingHours,telephone)
    return details
}


let createForm = function() {
    const formContainer = document.createElement("div")
    formContainer.setAttribute("id","form-container")

    const fullNameContainer = document.createElement("div")
    const fullName = document.createElement("input")
    fullName.classList.add("form-input")
    fullNameContainer.appendChild(fullName)

    const emailContainer = document.createElement("div")
    const email = document.createElement("input")
    email.classList.add("form-input")
    emailContainer.appendChild(email)

    const messageContainer = document.createElement("div")
    const message = document.createElement("input")
    message.classList.add("form-input")
    messageContainer.appendChild(message)

    const submitButton = document.createElement("button")

    fullName.setAttribute("placeholder","Full Name")
    email.setAttribute("placeholder","Email Adress")
    message.setAttribute("placeholder","What you want to tell us?")
    submitButton.textContent = "Send";
   
    formContainer.append(fullNameContainer,emailContainer,messageContainer,submitButton)

    return formContainer
}

let container = function () {

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    const heading = createHeading("Contact Us");
    contactContainer.appendChild(heading);
    
    const detail = createDetails()
    contactContainer.appendChild(detail)
   
    const form = createForm()
    contactContainer.appendChild(form)
    
    return contactContainer
}

export { container }