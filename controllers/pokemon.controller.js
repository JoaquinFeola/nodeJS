const Pokemon = require("../database/models/pokemon.model");

const createPokemon = async (req, res) => {
    const { pokemon_name, pokemon_description, pokemon_habilities, pokemon_image } = req.body;
    console.log(pokemon_name)
    const newPokemon = await Pokemon.create({ name: pokemon_name, description: pokemon_description, habilities: pokemon_habilities });
    console.log(newPokemon);
    res.redirect('/pokemons-laboratory');
};

module.exports = {
    createPokemon,
}