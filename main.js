(()=>{"use strict";let t=function(){const t=document.createElement("div");t.setAttribute("id","inital-page-container");const e=function(){const t=document.createElement("h1");return t.classList.add("title"),t.textContent="Labccdd Pizzeria De Milo'hs",t}();t.appendChild(e);const n=function(){const t=document.createElement("img");return t.src="../src/Images/pizza.jpg",t.classList.add("img"),t}();t.appendChild(n);const i=function(){const t=document.createElement("p");return t.classList.add("main-p"),t.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Cras sit amet ex at ligula vehicula variusNam sed urna commodo, efficitur nisl nec, auctor libero. <br> I am a second Aliquam fermentum luctus mi ac auctor. <br> In iaculis rhoncus turpis, et interdum nibh feugiat at. Nunc consequat dictum sem at iaculis. Mauris facilisis odio id luctus bibendum",t}();return t.appendChild(i),t};let e={mainContainer:document.querySelector("#content")},n=function(){const n=document.createElement("button"),i=document.createElement("button"),a=document.createElement("button"),c=document.createElement("div");c.setAttribute("id","buttons-container"),c.append(n,i,a),e.mainContainer.appendChild(c),n.textContent="Menu",i.textContent="Contact",a.textContent="Home",i.setAttribute("id","contact"),a.setAttribute("id","home"),n.setAttribute("id","menu"),e.mainContainer.appendChild(t());let o=document.getElementById("buttons-container").childNodes;for(let t=0;t<o.length;t++)o[t].setAttribute("class","button");return{buttonsContainer:c,menuButton:n,contactButton:i,initialButton:a}}();!function(){let i=1,a=0,c=0;function o(t){"contact"===t?(i=0,c=0):"home"===t?(a=0,c=0):"menu"===t&&(i=0,a=0)}n.contactButton.addEventListener("click",(function(t){if(0===a){e.mainContainer.innerText="",e.mainContainer.appendChild(n.buttonsContainer),e.mainContainer.appendChild(function(){const t=document.createElement("div");t.classList.add("contact-container");const e=function(t){const e=document.createElement("h1");return e.textContent="Contact Us",e.classList.add("title"),e}();t.appendChild(e);const n=function(){const t=document.createElement("div"),e=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div");return t.classList.add("details-container"),e.innerHTML="<p> NY, United States Of America </p>",n.innerHTML="<p> Sunday - Thursday: 8AM - 8PM </p>",i.innerHTML="<p> Call now! 0555444333 </p>",t.append(e,n,i),t}();t.appendChild(n);const i=function(){const t=document.createElement("div");t.setAttribute("id","form-container");const e=document.createElement("div"),n=document.createElement("input");n.classList.add("form-input"),e.appendChild(n);const i=document.createElement("div"),a=document.createElement("input");a.classList.add("form-input"),i.appendChild(a);const c=document.createElement("div"),o=document.createElement("input");o.classList.add("form-input"),c.appendChild(o);const d=document.createElement("button");return n.setAttribute("placeholder","Full Name"),a.setAttribute("placeholder","Email Adress"),o.setAttribute("placeholder","What you want to tell us?"),d.textContent="Send",t.append(e,i,c,d),t}();return t.appendChild(i),t}());let t=document.getElementById("form-container").childNodes;for(let e=0;e<t.length;e++)e===t.length-1?t[e].setAttribute("class","button"):t[e].setAttribute("class","form-field");a++}o(t.target.id)})),n.menuButton.addEventListener("click",(function(t){0===c&&(e.mainContainer.innerText="",e.mainContainer.appendChild(n.buttonsContainer),e.mainContainer.appendChild(function(){const t=document.createElement("div");t.setAttribute("id","menu-container");const e=function(){const t=document.createElement("div"),e=document.createElement("h1");return e.textContent="Menu",e.classList.add("title"),t.appendChild(e)}();t.appendChild(e);const n=function(){const t=document.createElement("div");t.classList.add("imgaes-container");const e=document.createElement("div"),n=document.createElement("img");n.classList.add("img");const i=document.createElement("p");i.classList.add("p-menu"),n.src="../src/Images/pasta.jpg",i.textContent="Pasta, only 25$",e.append(n,i);const a=document.createElement("div"),c=document.createElement("img");c.classList.add("img");const o=document.createElement("p");o.classList.add("p-menu"),c.src="../src/Images/pizza1.jpg",o.textContent="Pizza, only 44$",a.append(c,o);const d=document.createElement("div"),s=document.createElement("img");s.classList.add("img");const r=document.createElement("p");return r.classList.add("p-menu"),s.src="../src/Images/soup.jpg",r.textContent="Pasta, only 15$",d.append(s,r),t.append(e,a,d),t}();return t.appendChild(n),t}()),c++),o(t.target.id)})),n.initialButton.addEventListener("click",(function(a){0===i&&(e.mainContainer.innerText="",e.mainContainer.appendChild(n.buttonsContainer),e.mainContainer.appendChild(t()),i++),o(a.target.id)}))}()})();