    
    let createHeading = function () {
        const h1 = document.createElement("h1");
        h1.classList.add("title")
        h1.textContent = "Labccdd Pizzeria De Milo'hs";
        return h1
    }

    let createImages = function(){
        const img = document.createElement("img")
        img.src = "../src/Images/pizza.jpg"
        img.classList.add("img")
        return img
    }

    let createTextContent = function () {
        const text = document.createElement("p")
        text.classList.add("main-p")
        text.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Cras sit amet ex at ligula vehicula variusNam sed urna commodo, efficitur nisl nec, auctor libero. <br> I am a second Aliquam fermentum luctus mi ac auctor. <br> In iaculis rhoncus turpis, et interdum nibh feugiat at. Nunc consequat dictum sem at iaculis. Mauris facilisis odio id luctus bibendum';
        return text
    }



     let pageLoad = function pageLoad () {
        const div = document.createElement("div");
        div.setAttribute("id","inital-page-container")

        const header = createHeading()
        div.appendChild(header)

        const img = createImages();
        div.appendChild(img)

        const text = createTextContent()
        div.appendChild(text)

        return div
    };


export { pageLoad }

