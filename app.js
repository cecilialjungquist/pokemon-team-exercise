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

let pokemonsAvailable = [];
let pokemonsChosen = [];

pokemons.forEach(pokemon => {
    let pokemonEl = document.createElement('article');

    pokemonEl.innerHTML = `
            <figure class="pokemon">
            <img src="jay-dkFJST9zZZo-unsplash.jpg" alt="Pokemon ball.">
            <figcaption>
                <h4>${pokemon.name}</h4>
                <p>${pokemon.cp}CP</p>
            </figcaption>
        </figure>
    `;
    pokemonsAvailable.push(pokemon);

    pokemonEl.addEventListener('click', swap);
    document.querySelector('.available').appendChild(pokemonEl);
});

function swap() {
    console.log('clicked');
    pokemonsChosen.push(this);
    pokemonsAvailable.pop(this)
    document.querySelector('.chosen').appendChild(this);
    console.log(pokemonsAvailable);
    console.log(pokemonsChosen);
}

// Om den finns i available ska den läggas till i chosen
// Om den finns i chosen ska den läggas till i available