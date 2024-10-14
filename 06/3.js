const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

/*
    Feladatok:
    1. rajzold ki a labdát :)
    2. essen le a labda egyenletesen
    3. essen le most már gyorsulva (g)
    4. ha eléri a canvas alját, pattanjon vissza
    5. addEventListener - ha canvasra katt, új labda spawnol (oda, random r és c)
*/

const balls = [
    {
        x: 50,
        y: 50,
        r: 10,
        c: 'red',
        vy: 0
    }
]

function render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (const ball of balls){
        ctx.beginPath()
        ctx.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI)
        ctx.fillStyle = ball.c
        ctx.fill()
    }
}

function update(dt){
    for (const ball of balls){
        ball.vy += 0.0002 * dt
        ball.y += ball.vy * dt
        if (ball.y + ball.r >= canvas.height && ball.vy > 0)
            ball.vy *= -1
    }
}

let lastLoop = performance.now()

function gameLoop(){
    const now = performance.now()
    const dt = now - lastLoop
    update(dt)
    render()
    lastLoop = now
    requestAnimationFrame(gameLoop)
}

gameLoop()

canvas.addEventListener('click', (e) => {
    balls.push({
        x: e.clientX,
        y: e.clientY,
        r: Math.floor(Math.random() * 20 + 5),
        c: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
        vy: 0
    })
})