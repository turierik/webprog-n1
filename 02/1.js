const h1 = document.querySelector("h1")
h1.innerText = "Át <i>vagyok</i> írva"
h1.innerHTML = "Át <i>vagyok</i> írva"

h1.style.color = "rgb(150, 60, 90)"
h1.style.backgroundColor = "yellow"

const img = document.querySelector("img")
img.width = "100"
img.src = "https://th.bing.com/th/id/OIP.K6sGDxs0OW-9NQPueeiQ4wAAAA?rs=1&pid=ImgDetMain"

const ps = document.querySelectorAll("p")
for (const p of ps){
    p.style.color = "red"
    p.style.fontWeight = "700"
}
    
function handleFoxClick(){
    const secondh1 = document.querySelector("#second")
    secondh1.innerText = "🦊 megnyomva"
}

img.addEventListener("click", handleFoxClick)