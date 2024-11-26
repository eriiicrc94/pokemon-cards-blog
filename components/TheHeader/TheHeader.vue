<template>
  <div class="the-header">
    <NuxtLink class="the-header__logo" to='/'>Pokémon</NuxtLink>
    <div class="the-header__navigator">
      <NuxtLink class="the-header__link" to='/' exact-active-class="active-link">HOME</NuxtLink>
      <NuxtLink class="the-header__link" to='/card-grading' exact-active-class="active-link">GRADING</NuxtLink>
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
    color: #FFFF;
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
  }

  &__navigator {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 1rem;
  }

  &__link {
    text-decoration: none;
    color: #FFFF;
    cursor: pointer;
    transition: font-weight 0.1s ease-in-out;

    &:hover {
      font-weight: bold;
    }
    &.active-link {
      font-weight: bold;
    }
  }
}
</style>