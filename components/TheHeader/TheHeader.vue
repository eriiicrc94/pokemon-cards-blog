<template>
  <div class="the-header">
    <h1 class="the-header__logo" @click="navigateTo('/pokemon-cards-blog')">Pokémon</h1>
    <div class="the-header__navigator">
      <div class="the-header__link" @click="navigateTo('/pokemon-cards-blog')">HOME</div>
      <div class="the-header__link" @click="navigateTo('/pokemon-cards-blog/card-grading')">GRADING</div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.the-header {
  max-width: 100%;
  background-color: #007bff;
  display: flex;
  align-items: center;
  padding: 1rem;
  max-height: 50px;
  color: #FFFF;
  gap: 5rem;

  &__logo {
    cursor: pointer;
  }

  &__navigator {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 1rem;
  }

  &__link {
    cursor: pointer;
    transition: font-weight 0.1s ease-in-out;

    &:hover {
      font-weight: bold;
    }
  }
}
</style>