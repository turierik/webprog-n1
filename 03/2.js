// Delegálás... parasztosan =
// sok (26, de akár 1e6 db) eseménykezelő helyett
// 1 db eseménykezelőt rakok a SZÜLŐ elemre

const ul = document.querySelector('ul')

function colorMeGreen(e){
    // e.target - az esemény "forrása" - az alsó szint
    
    if (e.target.matches('li')){  // !!!!!!! EZ KELL !!!!
        e.target.style.color = 'green'
        e.target.style.fontWeight = 'bold'
    }  
}

ul.addEventListener("click", colorMeGreen)