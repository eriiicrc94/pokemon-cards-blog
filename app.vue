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

<style lang="scss">
body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
}

h2 {
  margin: 0;
  font-weight: 600;
  font-size: 1.5rem;
  color: #007bff;
  
  @media(min-width: 769px) {
    font-size: 2rem;
  }
}

p {
  font-size: .8rem;
  line-height: 1.5;
  margin: 0;

  @media(min-width: 769px) {
    font-size: 1rem;
  }
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
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