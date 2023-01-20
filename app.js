const pokemons = [
    {
        id: 1,
        name: 'Bulbasaur',
        cp: 439
    },
    {
        id: 37,
        name: 'Vulpix',
        cp: 194
    },
    {
        id: 134,
        name: 'Vaporeon',
        cp: 2469
    },
    {
        id: 130,
        name: 'Gyarados',
        cp: 2406
    },
    {
        id: 25,
        name: 'Pikachu',
        cp: 455
    },
    {
        id: 27,
        name: 'Sandshrew',
        cp: 710
    },
    {
        id: 52,
        name: 'Meowth',
        cp: 121
    }
];

let totalPoints = 0;

pokemons.forEach(pokemon => {
    let pokemonEl = document.createElement('article');

    pokemonEl.innerHTML = `
            <figure class="pokemon" id="${pokemon.id}">
            <img src="jay-dkFJST9zZZo-unsplash.jpg" alt="Pokemon ball.">
            <figcaption>
                <h4>${pokemon.name}</h4>
                <p><span class="points">${pokemon.cp}</span> CP</p>
            </figcaption>
        </figure>
    `;


    pokemonEl.addEventListener('click', function () {
        swap(pokemonEl, pokemon.cp);
    });
    document.querySelector('.available').appendChild(pokemonEl);
});

function swap(pokemon, pokemonCP) {
    
    if (document.querySelector('.available').contains(pokemon)) {
        document.querySelector('.chosen').appendChild(pokemon);
        calcPoints(pokemonCP, '+');
    } else {
        document.querySelector('.available').appendChild(pokemon);
        calcPoints(pokemonCP, '-');
    }
}

function calcPoints(points, operator) {

    if (operator === '+') {
        totalPoints = totalPoints + points;  
    } else {
        totalPoints = totalPoints - points;
    }
    
    document.getElementById('points-total').innerHTML = `CP Total: ${totalPoints}`;  
}
