<template>
  <div class="grading-page">
    <header class="grading-page__header">
      <h1>{{ t('gradingSection.seo.title') }}</h1>
      <p>{{ t('gradingSection.seo.description') }}</p>
    </header>
    
    <index-guide
      :title="t('gradingSection.completeGuide')"
      :items="indexGuideItems" />

    <div class="grading-page__articles">
      <article-card 
        section-id="what-is-grading"
        :title="t('gradingSection.whatIsGrading.title')" 
        :description="t('gradingSection.whatIsGrading.description')" 
        :final-description="t('gradingSection.whatIsGrading.conclusion')"
        tone="gray" >
        <template v-slot:imageSection>
            <img src="@/assets/images/pikachupsa9.webp" alt="Pikachu PSA 10" />
        </template>
      </article-card>

      <article-card 
        section-id="grading-criteria"
        :title="t('gradingSection.gradingCriteria.title')" 
        :description="t('gradingSection.gradingCriteria.description')" 
        :items="criterias"
        :final-description="t('gradingSection.gradingCriteria.conclusion')" 
        reverse >
        <template v-slot:imageSection>
            <img src="@/assets/images/centrado.webp" alt="Centrado de Carta Pokémon" />
        </template>
      </article-card>

      <article-card 
        section-id="grading-companies"
        :title="t('gradingSection.bestCompanies.title')" 
        :description="t('gradingSection.bestCompanies.description')" 
        :items="companiesList"
        :final-description="t('gradingSection.bestCompanies.conclusion')" 
        tone="gray" />

      <article-card 
        section-id="comparison"
        :title="t('gradingSection.companiesComparision.title')" 
        :description="t('gradingSection.companiesComparision.description')" 
        :final-description="t('gradingSection.companiesComparision.conclusion')">
        <companies-comparision-table />
      </article-card>
  
      <article-card 
        section-id="how-to-protect"
        :title="t('gradingSection.howToProtectCards.title')" 
        :description="t('gradingSection.howToProtectCards.description')" 
        :items="protectingItems"
        :final-description="t('gradingSection.howToProtectCards.conclusion')" 
        tone="gray" />
    </div>
  </div>
</template>

<script setup>
import ArticleCard from '@/components/General/ArticleCard.vue'
import IndexGuide from '@/components/General/IndexGuide.vue'
import CompaniesComparisionTable from '@/components/Grading/CompaniesComparisionTable/CompaniesComparisionTable.vue'

const { t, tm } = useI18n()

const indexGuideItems = [
  {
    id: '#what-is-grading',
    text: t('gradingSection.whatIsGrading.title')
  },
  {
    id: '#grading-criteria',
    text: t('gradingSection.gradingCriteria.title')
  },
  {
    id: '#grading-companies',
    text: t('gradingSection.bestCompanies.title')
  },
  {
    id: '#comparison',
    text: t('gradingSection.companiesComparision.title')
  },
  {
    id: '#how-to-protect',
    text: t('gradingSection.howToProtectCards.title')
  },
]

const companiesList = computed(() => {
  return tm('gradingSection.bestCompanies.companies').map((item) => ({
    title: item.title?.body?.static || item.title?.b?.s,
    description: item.description?.body?.static || item.description?.b?.s,
    link: item.link?.body?.static || item.link?.b?.s,
  }))
})

const criterias = computed(() => {
 return tm('gradingSection.gradingCriteria.criterias').map((item) => ({
    title: item.title?.body?.static || item.title?.b?.s,
    description: item.description?.body?.static || item.description?.b?.s,
  }))
})

const protectingItems = computed(() => {
  return tm('gradingSection.howToProtectCards.protectingItems').map((item) => ({
    title: item.title?.body?.static || item.title?.b?.s,
    description: item.description?.body?.static || item.description?.b?.s,
  }))
})

useSeoMeta({
  title: t('gradingSection.seo.title'),
  ogTitle: t('gradingSection.seo.title'),
  description: t('gradingSection.seo.description'),
  // ogDescription: t('seo.description'),
  // ogImage: `${config.public.baseUrl}/v3/images/solar-panels/solar-panels-og.jpg`
})
</script>


<style lang="scss">
html {
  scroll-behavior: smooth;
}
.grading-page {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 0;
  max-width: 1440px;
  margin: 0 auto;
  color: #333;

  &__header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 2rem;
  }

  &__articles {
    .article-card__image {
      img {
        width: 200px;
        max-height: 400px; 
        border-radius: .5rem;
      }
    }
  }
}
</style>
