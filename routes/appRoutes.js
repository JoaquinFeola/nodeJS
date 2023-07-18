const express = require('express');
const { createPokemon } = require('../controllers/pokemon.controller');
const Pokemon = require('../database/models/pokemon.model');
const Ability = require('../database/models/ability.model');
const router = express.Router();

// Routes
router.get('/', async (req, res) => {
    const resp = await Pokemon.findAll();
    const data = resp.map((result) => result.toJSON());


    res.render('home', { Pokemons: data });
});

router.get('/pokemons-laboratory', async (req, res) => {
    const resp = await Ability.findAll();
    const results = resp.map((dta) => dta.toJSON());

    res.render('pokemonsLaboratory', {
        results
    });


});


// API
router.post('/api/v1/pokemon/', createPokemon);


module.exports = router;
