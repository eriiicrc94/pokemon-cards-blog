<template>
  <section :id="sectionId" class="article-card" 
    :class="{
        [getBackgroundClass]: true, 
        'article-card--reverse': reverse
    }">
    <div class="article-card__text">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <ul v-if="items && items.length" class="article-card__items">
        <li v-for="(item, index) in items" :key="index">
          <strong>{{ item.title }}</strong> 
          <p>{{ item.description }}</p>
          <!-- <a v-if="item.link" :href="item.link" target="_blank" rel="noopener noreferrer">Visitar sitio web</a> -->
        </li>
      </ul>
      <slot />
      <p>{{ finalDescription }}</p>
    </div>
    <div v-if="$slots.imageSection" class="article-card__image">
      <slot name="imageSection" />
    </div>
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
  reverse: {
    type: Boolean,
    default: false
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
  gap: 2rem;
  padding: 1.5rem 2rem;
  margin: 0 2rem;
  flex-direction: column;

  @media(min-width: 769px) {
    flex-direction: row;
    gap: 4rem
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &__items{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
    @media(min-width: 769px) {
      justify-content: flex-end
    }
  }

  &--reverse {
    @media(min-width: 769px) {
      flex-direction: row-reverse;
    }
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