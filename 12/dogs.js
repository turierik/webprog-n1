const input = document.querySelector('input')
const tbody = document.querySelector('tbody')

async function updateDogs(){
    const resp = await fetch('dogs.php?filter=' + input.value)
    const data = await resp.json()
    tbody.innerHTML = data.map(dog => `<tr><td>${dog.name}</td>
        <td>${dog.species}</td><td>${dog.kgs}</td><tr>`).join('');
}

updateDogs()
input.addEventListener('input', updateDogs)