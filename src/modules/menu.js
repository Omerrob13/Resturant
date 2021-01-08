const header = function () {
    const headerContainer = document.createElement("div")
    const h1 = document.createElement("h1")
    h1.textContent = "Menu"
    h1.classList.add("title")

    return headerContainer.appendChild(h1)
    
}



const images = function () {
    const imagesContainer = document.createElement("div")
    imagesContainer.classList.add("imgaes-container")

    const pastaImgContainer = document.createElement("div")
    const pastaImg = document.createElement("img")
    pastaImg.classList.add("img")
    const pastaP = document.createElement("p")
    pastaP.classList.add("p-menu")

    pastaImg.src = "../src/Images/pasta.jpg"
    pastaP.textContent = "Pasta, only 25$"
    pastaImgContainer.append(pastaImg,pastaP)


    const pizzaImgContainer = document.createElement("div")
    const pizzaImg = document.createElement("img")
    pizzaImg.classList.add("img")
    const pizzaP = document.createElement("p")
    pizzaP.classList.add("p-menu")

    pizzaImg.src = "../src/Images/pizza1.jpg"
    pizzaP.textContent = "Pizza, only 44$"
    pizzaImgContainer.append(pizzaImg,pizzaP)


    const soupImgContainer = document.createElement("div")
    const soupImg = document.createElement("img")
    soupImg.classList.add("img")
    const soupP = document.createElement("p")
    soupP.classList.add("p-menu")

    soupImg.src = "../src/Images/soup.jpg"
    soupP.textContent = "Pasta, only 15$"
    soupImgContainer.append(soupImg,soupP)

   
    

    imagesContainer.append(pastaImgContainer,pizzaImgContainer,soupImgContainer)
    return imagesContainer
}



const render = function () {
    const menuContainer = document.createElement("div")
    menuContainer.setAttribute("id","menu-container")

    const header1 = header()
    menuContainer.appendChild(header1)

    const images1 = images()
    menuContainer.appendChild(images1)

    return menuContainer
}

export { render }
