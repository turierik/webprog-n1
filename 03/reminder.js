const colorInput = document.querySelector('input[type=color]')
//const doButton = document.querySelector('button')

function changeBodyBgColor(){
    document.body.style.backgroundColor = colorInput.value
}

colorInput.addEventListener("input", changeBodyBgColor)