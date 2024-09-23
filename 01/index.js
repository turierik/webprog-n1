let t = [3, 8, -4, 0, 6, 2, 2, 2, 2, -1]
let u = []
for (let i = 0; i < t.length; i++){
    u[i] = t[i] ** 2
}
console.log(u)
u = []
for (el of t){
    u[u.length] = el ** 2
}
console.log(u)

// TÖMBFÜGGVÉNYEK :)

// 1. map - másolás progtétel
u = t.map(x => x ** 2)
console.log(u)

// 2. filter - kiválogatás progtétel
u = t.filter(x => x % 2 === 0)
console.log(u)

// 3. every - eldöntés (minden elemre igaz-e)
u = t.every(x => x % 2 === 0)
console.log(u)

// 4. some - eldöntés (bármely elemre igaz-e)
u = t.some(x => x % 2 === 0)
console.log(u)

// 5. find - keresés
u = t.find(x => x % 2 === 0)
console.log(u)

// 6. findIndex - keresés (index)
u = t.findIndex(x => x % 2 === 0)
console.log(u)

let o = {        // object
    year: 2020,
    model: "Nissan Talicska",
    used: true,
    setYear: function (_year){
        this.year = _year
    }
}
console.log(o.year)
o.setYear(2018)
console.log(o["year"])

function sqr(n){
    return n * n
}

const square = (n) => n * n
// square = 3.1415

const w = [1, 2, 3]
w[4] = 4
console.log(w)

const b = {
    x: 3,
    y: 5
}
b.x = 6
b.z = 7
console.log(b)

// 1. feladat:
const arr = [2, 6, 3, 4, 6, 7, 2]
// mennyi a páros elemek összege? (for..of, reduce)
arr.filter(x => x % 2 === 0).reduce((x, s) => x + s, 0)

// 2. feladat:
const arr2 = [4, 6, 0, 2, 1, 3, 4, 0, 0, 1, 2]
// hány db 0 van a tömbben?
arr2.filter(x => x === 0).length
arr2.reduce((x, c) => x === 0 ? c + 1 : c, 0)

// 3. feladat:
const mat = [
    [1, 2, 3],
    [0, 0, 2],
    [3, 4, 4],
    [2, 4, 6]
]
// hány olyan sor van, amiben csak páros számok vannak?
mat.filter(row => row.every(x => x % 2 === 0)).length

// 4. feladat:
const students = [
    { name: "Pista", average: 4.33, glasses: false },
    { name: "Jani", average: 3.23, glasses: true },
    { name: "Béla", average: 2.03, glasses: false },
    { name: "Józsi", average: 1.11, glasses: true }
]
// mi a legjobb átlagú, szemüveges diák neve?
const maxAvg = Math.max(...students.filter(s => s.glasses).map(s => s.average))
students.find(s => s.average === maxAvg && s.glasses)
