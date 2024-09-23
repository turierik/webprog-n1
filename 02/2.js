const button = document.querySelector("button")
const span = document.querySelector("span")

function handlePlusOneClick(){
    span.innerText = +(span.innerText) + 1
}

button.addEventListener("click", handlePlusOneClick)