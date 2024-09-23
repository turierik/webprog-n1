const t = [
    "alma", "banán", "citrom", "datolya", "eper", "füge", "gesztenye"
]

const ul = document.querySelector("ul")

for (const el of t){
    const li = document.createElement("li")
    li.innerText = el
    ul.appendChild(li)
}

ul.innerHTML = t.map(x => `<li>${x}</li>`).join('')
