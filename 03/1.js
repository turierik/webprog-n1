let click1 = null
const span = document.querySelector('span')

function doSomething(e){
    if (click1 === null){
        click1 = e
        span.innerText = "Várom a második kattintást!"
    } else {
        span.innerText = `Eltelt idő: ${e.timeStamp - click1.timeStamp} ms\nMegtett távolság: ${
            Math.sqrt((click1.screenX - e.screenX)**2 + (click1.screenY - e.screenY)**2)
        } px`
        click1 = e
    }
}

window.addEventListener("click", doSomething)
