const target = Math.floor(Math.random() * 100)
const span = document.querySelector("span")
const input = document.querySelector("input")
const button = document.querySelector("button")

button.addEventListener("click", () => {
    const x = input.valueAsNumber
    if (isNaN(x)){
        span.innerText = "Számot írjál már be, ember!"
    } else {
        if (target === x)
            span.innerText = "Eltaláltad."
        else if (target > x)
            span.innerText = "Nagyobbra gondoltam."
        else
            span.innerText = "Kisebbre gondoltam."
    }
})