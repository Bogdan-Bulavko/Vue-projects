<script setup>
import PokemokenCard from './PokemonCard.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'

let counter = ref(0)

const POKEMON_API = 'https://pokeapi.co/api/v2'
const POKEMON_LIMIT = 12
let pokemonOffset = 0
// const START_ID = '#0000';
// const quantityCellGraphPokemonPage = 15;
// const listGraphStats = [
//   'HP',
//   'Attack',
//   'Defense',
//   'Special-Attack',
//   'Special-Defense',
//   'Speed',
// ];

const fetchPokemonData = async (url) => {
  const response = await axios.get(url)
  return response.data
}

const getPokemons = async function () {
  //   const arr = []
  try {
    const data = await fetch(
      `${POKEMON_API}/pokemon?limit=${POKEMON_LIMIT}&offset=${pokemonOffset}`,
    )

    const pokemons = await data.json()

    let arrURL = pokemons.results.map((pokemon) => pokemon.url)

    const pokemonsObjects = await Promise.all(
      arrURL.map(async (url) => {
        return await fetchPokemonData(url)
      }),
    )

    console.log(pokemonsObjects)

    // pokemonsObjects.forEach(async (pokemon) => {
    //   const obj = formDataPokemon(pokemon);
    //   allPokemonsData.push(obj);
    // });
  } catch (e) {
    console.log(e)
  }
}

onMounted(async () => {
  await getPokemons()
})

const incrBtn = () => {
  counter.value++
}
</script>

<template>
  <div>
    <PokemokenCard data="" />
    {{ counter }}
    <button @click="incrBtn">incr</button>
  </div>
</template>

<style scoped></style>
