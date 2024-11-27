<template>
  <div class="the-header">
    <NuxtLink class="the-header__logo" to='/'>
      <img v-if="isMobile" src="@/assets/icons/pokeball.webp" alt="Pokémon"></img>
      <span v-else>Pokémon</span>
    </NuxtLink>
    <div class="the-header__navigator">
      <NuxtLink class="the-header__link" to='/' exact-active-class="active-link">HOME</NuxtLink>
      <NuxtLink class="the-header__link" to='/card-grading' exact-active-class="active-link">GRADING</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isMobile } from '@/composables/useIsMobile'
</script>

<style scoped lang="scss">
.the-header {
  max-width: 100%;
  background-color: #007bff;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  max-height: 50px;
  color: #FFFF;
  gap: 3rem;

  &__logo {
    cursor: pointer;
    color: #FFFF;
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    align-items: center;

    img {
      width: 2rem;
      height: 2rem;
    }
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