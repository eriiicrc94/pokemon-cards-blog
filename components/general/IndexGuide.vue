<template>
  <section class="table-of-contents">
    <h2 class="table-of-contents__title">{{ title }}</h2>
    <ul class="table-of-contents__list">
      <li v-for="(item, index) in items" :key="index">
        <a class="table-of-contents__list__item" :href="item.id">{{ item.text }}</a>
      </li>
    </ul>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  items: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.table-of-contents {
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  padding: 1.5rem;
  margin: 0 2rem;
  border: 1px solid #ddd;
  border-radius: .5rem;
  gap: 1rem;

  &__list {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: .5rem;

    &__item {
      color: #007bff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>