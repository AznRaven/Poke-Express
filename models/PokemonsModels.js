const mongoose = require('mongoose')
const pokemons = require('./pokemons')

const Schema = mongoose.Schema

const pokemonsSchema = new Schema({
    name: {type: String, required: true},
    img: {type: String, required: true},
})

const Pokemons = mongoose.model('pokemons', pokemonsSchema)

module.exports = Pokemons