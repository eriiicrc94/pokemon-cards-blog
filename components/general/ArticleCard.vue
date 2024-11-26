<template>
  <section :id="sectionId" class="article-card" :class="getBackgroundClass">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <ul v-if="items && items.length" class="article-card__items">
      <li v-for="(item, index) in items" :key="index">
        <strong>{{ item.title }}:</strong> 
        <p>{{ item.description }}</p>
        <!-- <a v-if="item.link" :href="item.link" target="_blank" rel="noopener noreferrer">Visitar sitio web</a> -->
      </li>
    </ul>
    <p>{{ finalDescription }}</p>
  </section>
</template>

<script setup>
const props = defineProps({
  sectionId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    default: []
  },
  finalDescription: {
    type: String,
    required: true,
  },
  tone: {
    type: String,
    default: 'bg-white',
  }
})

const getBackgroundClass = computed(() => {
  return props.tone === 'gray' ? 'bg-light-gray' : 'bg-white'
})
</script>

<style lang="scss" scoped>
.article-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 2rem;

  &__items{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}

.bg-white {
  background-color: #ffffff;
  border-radius: .5rem;
}

.bg-light-gray {
  background-color: #f9f9f9;
  border-radius: .5rem;
}
</style>