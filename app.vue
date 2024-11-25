<template>
  <div>
    <NuxtLayout>
      <the-header></the-header>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>

<script setup>
import TheHeader from '@/components/TheHeader/TheHeader.vue';
</script>

<style>
body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}
</style>