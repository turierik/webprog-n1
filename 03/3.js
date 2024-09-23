function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
    const targetElement = event.target.closest(selector);
        if (this.contains(targetElement)) {
            handler.call(targetElement, event);
        }
    });
}

const matrix = [
    ['Andor', 'Béla', 'Cecil'],
    ['Dani', 'Emma', 'Feri'],
    ['Gabi', 'Heléna', 'Imre'],
    ['Janka', 'Klári', 'Lea']
]

// 1. generálj egy táblázatot ebből a mátrixból
// 2. ha rámutatok egy sorra, legyen a háttere sárga (mouseover)
// 3. ha lejövök a sorról, legyen megint átlátszó a háttere (mouseout)

const table = document.querySelector('table')

// for (const row of matrix){
//     let tr = document.createElement('tr')
//     for (const cell of row){
//         let td = document.createElement('td')
//         td.innerText = cell
//         tr.appendChild(td)
//     }
//     table.appendChild(tr)
// }

table.innerHTML = matrix.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')

// let tmp = ""
// for (const row of matrix){
//     tmp += "<tr>"
//     for (const cell of row){
//         tmp += "<td>" + cell + "</td>"
//     }
//     tmp += "</tr>"
// }
// table.innerHTML = tmp

delegate(table, "mouseover", "tr", function(e){
    this.style.backgroundColor = 'yellow'
})

delegate(table, "mouseout", "tr", function(e){
    this.style.backgroundColor = ''
})
