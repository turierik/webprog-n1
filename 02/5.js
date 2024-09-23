const input = document.querySelector("input")
const button = document.querySelector("button")
const table = document.querySelector("table")

// button.addEventListener("click", function(){
//     const n = input.valueAsNumber
//     if (!isNaN(n)){
//         table.innerHTML = ""
//         for (let i = 1; i <= n; i++){
//             const tr = document.createElement("tr")
//             for (let j = 1; j <= n; j++){
//                 const td = document.createElement("td")
//                 td.innerText = i * j
//                 tr.appendChild(td)
//             }
//             table.appendChild(tr)
//         }
//     }
// })

button.addEventListener("click", function(){
    const n = input.valueAsNumber
    const nums = [...Array(n).fill(0).keys()] // JS BLACK MAGIC
    if (!isNaN(n)){
        table.innerHTML = nums.map(x => `<tr>
            ${nums.map(y => `<td>${(x+1)*(y+1)}</td>`).join('')}
        </tr>`).join('')
    }
})