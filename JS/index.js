const API_URL = "https://pokeapi.co/api/v2";

const xhr = new XMLHttpRequest;

const pokemon = "";

function buscar() {
    let buscarPokemon = document.querySelector("#ingresa-pokemon").value;
    buscarPokemon = buscarPokemon.toLowerCase();

    if (buscarPokemon === "") {
        alert("ingresa un nombre de pokemon, por favor");
    } else {
            xhr.addEventListener('load', onRequest);
            xhr.open('GET', `${API_URL}/pokemon/${buscarPokemon}`);
            xhr.send();
    }
}

function onRequest() {
    if (this.readyState === 4 && this.status === 200) {
        
        const data = JSON.parse(this.response);
        console.log(data);
        const HTMLResponse = document.querySelector("#pokemon");

        const tample = [data].map((poke) => `<img src="${poke.sprites.other.dream_world.front_default}" id="img-pokemon"> <li class="info">nombre:${poke.name}</li> <li class="info">altura: ${poke.height}</li> `);
        HTMLResponse.innerHTML = `<ul>${tample}</ul>`;
    }else{
        alert("ingresa un nombre valido de pokemon, por favor");
    }
}