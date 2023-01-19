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
            <figure class="pokemon" id="${pokemon.id}">
            <img src="jay-dkFJST9zZZo-unsplash.jpg" alt="Pokemon ball.">
            <figcaption>
                <h4>${pokemon.name}</h4>
                <p><span class="points">${pokemon.cp}</span>CP</p>
            </figcaption>
        </figure>
    `;
    pokemonsAvailable.push(pokemon.name);

    pokemonEl.addEventListener('click', swap);
    document.querySelector('.available').appendChild(pokemonEl);
});

function swap() {
    // console.log('clicked');
    
    for (let i = 0; i < pokemonsAvailable.length; i++) {
        if (this.querySelector('h4').innerHTML === pokemonsAvailable[i]) {
            console.log(i + pokemonsAvailable[i]);

            // Pushar namnet till chosen array
            pokemonsChosen.push(this.querySelector('h4').innerHTML);
            // Tar bort från available
            pokemonsAvailable.splice(i, 1);
            // Flyttar till chosen
            document.querySelector('.chosen').appendChild(this);

        } 
        if (this.querySelector('h4').innerHTML === pokemonsChosen[i]) {
            
            console.log(i + pokemonsChosen[i]);
            
            pokemonsAvailable.push(this.querySelector('h4').innerHTML);
            
            pokemonsChosen.splice(i,1);        

            document.querySelector('.available').appendChild(this);
                
        }
    }

    // console.log(this.querySelector('.points').innerHTML);
    console.log(pokemonsAvailable);
    console.log(pokemonsChosen);
}

// Om den finns i available ska den läggas till i chosen
// Om den finns i chosen ska den läggas till i available