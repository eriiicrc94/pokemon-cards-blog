<template>
  <table v-if="!isMobile">
    <thead>
      <tr>
        <th>Casa</th>
        <th>Precio</th>
        <th>Tiempo de Entrega</th>
        <th>Fiabilidad</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>PSA</td>
        <td>Alto</td>
        <td>Largo</td>
        <td>Alta</td>
      </tr>
      <tr>
        <td>APGrading</td>
        <td>Moderado</td>
        <td>Moderado</td>
        <td>Alta</td>
      </tr>
      <tr>
        <td>PCAgrade</td>
        <td>Bajo</td>
        <td>Corto</td>
        <td>Moderada</td>
      </tr>
      <tr>
        <td>EuropeanGrading</td>
        <td>Moderado</td>
        <td>Moderado</td>
        <td>Alta</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { isMobile } from '@/composables/useIsMobile'
</script>

<style>
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
}
</style>