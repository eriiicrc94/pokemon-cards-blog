<template>
  <div class="the-footer">
      <p class="the-footer__copy">Copyright © 2024 <span itemprop="name">PokeCards</span>
        <span v-if="!isMobile" class="the-footer__description">. Tu destino para aprender todo sobre cartas Pokémon: cómo coleccionarlas, gradearlas y protegerlas.</span></p>
      <nav>
        <ul>
          <li>
            <!-- <NuxtLink class="the-footer__link" to='/contacto' exact-active-class="active-link">Contacto</NuxtLink> -->
          </li>
        </ul>
      </nav>
  </div>
</template>

<script>
import { isMobile } from '@/composables/useIsMobile'
</script>

<style lang="scss" scoped>
.the-footer {
  height: 2.5rem;
  background-color: #007bff;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  color: #FFFF;
  justify-content: space-between;
  
  &__copy {
    font-size: .8rem;
  }

  &__link {
    color: #FFFF;
    font-size: .8rem;
  }
}
</style>