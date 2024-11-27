<template>
  <div class="comparision-table">
    <table>
      <thead>
        <tr>
          <th>
            <span v-if="!isMobile">Casa</span>
            <img v-else src="@/assets/icons/home.webp" alt="Empresa de grading" />
          </th>
          <th>
            <span v-if="!isMobile">Price</span>
            <img v-else src="@/assets/icons/money.webp" alt="Precio de gradeo" />
          </th>
          <th>
            <span v-if="!isMobile">Tiempo de Entrega</span>
            <img v-else src="@/assets/icons/clock.webp" alt="Tiempo de espera" />
          </th>
          <th>
            <span v-if="!isMobile">Fiabilidad</span>
            <img v-else src="@/assets/icons/check.webp" alt="Fiabilidad" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PSA</td>
          <td>
            <span v-if="!isMobile">Alto</span>
            <img v-else src="@/assets/icons/arrow-up.webp" alt="Alta valoración del precio" />
          </td>
          <td>
            <span v-if="!isMobile">Largo</span>
            <img v-else src="@/assets/icons/arrow-down.webp" alt="Tiempo de entrega largo" />
          </td>
          <td>
            <span v-if="!isMobile">Alto</span>
            <img v-else src="@/assets/icons/arrow-up.webp" alt="Alta fiabilidad" />
          </td>
        </tr>
        <tr>
          <td>
            <span v-if="!isMobile">APGrading</span>
            <span v-else>AP</span>
          </td>
          <td>
            <span v-if="!isMobile">Moderado</span>
            <img v-else src="@/assets/icons/arrow-mid.webp" alt="Valoración moderada del precio" />
          </td>
          <td>
            <span v-if="!isMobile">Moderado</span>
            <img v-else src="@/assets/icons/arrow-mid.webp" alt="Tiempo de entrega moderado" />
          </td>
          <td>
            <span v-if="!isMobile">Alto</span>
            <img v-else src="@/assets/icons/arrow-up.webp" alt="Alta fiabilidad" />
          </td>
        </tr>
        <tr>
          <td>
            <span v-if="!isMobile">PCAgrade</span>
            <span v-else>PCA</span>
          </td>
          <td>
            <span v-if="!isMobile">Bajo</span>
            <img v-else src="@/assets/icons/arrow-down.webp" alt="Valoración baja del precio" />
          </td>
          <td>
            <span v-if="!isMobile">Bajo</span>
            <img v-else src="@/assets/icons/arrow-down.webp" alt="Tiempo de entrega bajo" />
          </td>
          <td>
            <span v-if="!isMobile">Moderado</span>
            <img v-else src="@/assets/icons/arrow-mid.webp" alt="Fiabilidad moderada" />
          </td>
        </tr>
        <tr>
          <td>
            <span v-if="!isMobile">EuropeanGrading</span>
            <span v-else>EG</span>
          </td>
          <td>
            <span v-if="!isMobile">Moderado</span>
            <img v-else src="@/assets/icons/arrow-mid.webp" alt="Valoración moderada del precio" />
          </td>
          <td>
            <span v-if="!isMobile">Moderado</span>
            <img v-else src="@/assets/icons/arrow-mid.webp" alt="Tiempo de entrega moderado" />
          </td>
          <td>
            <span v-if="!isMobile">Alto</span>
            <img v-else src="@/assets/icons/arrow-up.webp" alt="Alta fiabilidad" />
          </td>
        </tr>
      </tbody>
    </table>
    <p v-if="isMobile" class="comparision-table__description">Comparación de las mejores casas de grading de cartas pokémon por precio, tiempo de espera y fiabilidad.</p>
  </div>
</template>

<script setup>
import { isMobile } from '@/composables/useIsMobile'
</script>

<style lang="scss" scoped>
.comparision-table {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  table,
  th,
  td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: center;
  }
  
  th {
    background-color: #f4f4f4;
    font-weight: 700;

    img {
      width: 1.5rem;
    }
  }
  
  img {
    width: 1rem;
    height: auto;
  }

  &__description {
    font-size: .6rem;
  }

}
</style>
