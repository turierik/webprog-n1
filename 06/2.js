const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const thingy = {
    x: 0,
    y: canvas.height / 2,
    w: 10,
    h: 10,
    vx: 1,
    vy: -2,
    g: 0.02
}

function render(){
    //ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillRect(thingy.x, thingy.y, thingy.w, thingy.h)
}

function update(dt){
    thingy.x += thingy.vx * dt    
    thingy.vy += thingy.g * dt // gyorsulás! vy növelése!
    thingy.y += thingy.vy * dt
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