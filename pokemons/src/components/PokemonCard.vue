<script setup></script>

<template>
  <div class="pokemon-card">
    <div class="pokemon-card__image">
      <a href="#">
        <img class="imgPC" src="..\assets\image\not-images.png" alt="image pokemon" />
      </a>
    </div>
    <div class="pokemon-card__info">
      <p class="pokemon-card__id">#0001</p>
      <h2 class="pokemon-card__name">Bulbasaur</h2>
      <div class="pokemon-card__set-of-forces">
        <div class="pokemon-card__type-of-force">Poison</div>
        <div class="pokemon-card__type-of-force">Poison</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pokemon-card {
  margin: auto;
  width: 205px;
  background: white;
  margin-bottom: 50px;
}

.pokemon-card__image {
  margin-bottom: 5px;
  height: 230px;
  border-radius: 10px;
  cursor: pointer;
}

.imgPC {
  width: 100%;
  height: 100%;
  background: #f2f2f2;
}

.pokemon-card__info {
  padding: 0 20px 20px 20px;
}

.pokemon-card__id {
  margin-bottom: 15px;
  color: gray;
}

.pokemon-card__name {
  margin-bottom: 5px;
}

.pokemon-card__set-of-forces {
  display: flex;
  flex-wrap: wrap;
}

.pokemon-card__type-of-force {
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  border-radius: 5px;
}
</style>
