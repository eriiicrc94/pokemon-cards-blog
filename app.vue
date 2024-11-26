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

h1 {
  font-size: 2.5em;
  font-weight: 700;
  margin: 0;
}

h2 {
  margin: 0;
  font-size: 2em;
  font-weight: 600;
  color: #007bff;
}

p {
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  font-size: 1.1rem;
  line-height: 1.5;
}

table {
  width: 100%;
  border-collapse: collapse;
}
</style>