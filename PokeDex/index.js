const pokemonName = document.querySelector('.pokemonName')
const pokemonNumber = document.querySelector('.pokemonNumber')
const pokemonImage = document.querySelector('.pokemonImage')
const fetchPokemon = async (pokemon) => {
const APIResponse = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
const data = await APIResponse.json()
return data
}
const renderPokemon = async (pokemon) =>{
const data = await fetchPokemon(pokemon);
pokemonName.innerHTML = data.name[0].toUpperCase() + data.name.substr(1) + ' -';
pokemonNumber.innerHTML = data.id;
pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
}
var pokemon = 300
renderPokemon(pokemon);

document.getElementById('desce').onclick =()=> renderPokemon(pokemon-=1);
document.getElementById('avanca').onclick =()=> renderPokemon(pokemon+=1);
document.getElementById('menos__10').onclick =()=> renderPokemon(pokemon-=10);
document.getElementById('mais__10').onclick =()=> renderPokemon(pokemon+=10);