const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// 1. direkt rajzolások

ctx.fillStyle = 'green'
ctx.fillRect(100, 100, 80, 20)

ctx.strokeStyle = 'blue'
ctx.lineWidth = 4
ctx.strokeRect(150, 150, 80, 20)

ctx.font = '20pt Arial'
ctx.fillText('hewwo', 30, 30)
ctx.lineWidth = 1
ctx.strokeText('UwU', 60, 60)

ctx.clearRect(80, 80, 100, 100)

// 2. útvonalas rajzolás

ctx.beginPath()
ctx.moveTo(50, 50)
ctx.lineTo(50, 100)
ctx.lineTo(100, 100)
ctx.lineTo(50, 50)
ctx.fill()
ctx.stroke()