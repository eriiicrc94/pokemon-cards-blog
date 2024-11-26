<template>
  <div class="grading-page">
    <header class="grading-page__header">
      <h1>{{ t('gradingSection.howToGrade') }}</h1>
      <p>{{ t('gradingSection.findHowToMaximizeValue') }}</p>
    </header>
    
    <index-guide
      :title="t('gradingSection.completeGuide')"
      :items="indexGuideItems" />

    <div class="grading-page__articles">
      <article-card 
        section-id="what-is-grading"
        :title="t('gradingSection.whatIsGrading')" 
        :description="t('gradingSection.gradingExplanation')" 
        :final-description="t('gradingSection.gradingObjective')" 
        tone="gray" />
      
      <article-card 
          section-id="grading-criteria"
          :title="t('gradingSection.gradingCriteria')" 
          :description="t('gradingSection.physiqueStateCard')" 
          :items="criterias"
          :final-description="t('gradingSection.maximizeCardState')" 
        />
  
      <article-card 
        section-id="grading-companies"
        :title="t('gradingSection.bestCompanies')" 
        :description="t('gradingSection.selectingGradingCompanyCrucial')" 
        :items="companiesList"
        :final-description="t('gradingSection.itsOnYou')" 
        tone="gray" />


      <article-card 
        section-id="comparison"
        :title="t('gradingSection.companiesComparision')" 
        :description="t('gradingSection.chooseCompanyComplicated')" 
        :final-description="t('gradingSection.rememberOtherCompanies')">
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
      </article-card>
  
      <article-card 
        section-id="how-to-protect"
        :title="t('gradingSection.howToProtectCards')" 
        :description="t('gradingSection.howToProtectDescription')" 
        :items="protectingItems"
        :final-description="t('gradingSection.howToProtectConclusion')" 
        tone="gray" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ArticleCard from '@/components/general/ArticleCard.vue'
import IndexGuide from '@/components/general/IndexGuide.vue'
import { isMobile } from '@/composables/useIsMobile'

const { t, tm } = useI18n()

const indexGuideItems = [
  {
    id: '#what-is-grading',
    text: t('gradingSection.whatIsGrading')
  },
  {
    id: '#grading-criteria',
    text: t('gradingSection.gradingCriteria')
  },
  {
    id: '#grading-companies',
    text: t('gradingSection.bestCompanies')
  },
  {
    id: '#comparison',
    text: t('gradingSection.companiesComparision')
  },
  {
    id: '#how-to-protect',
    text: t('gradingSection.howToProtectCards')
  },
]

const companiesList = computed(() => {
  return (tm('gradingSection.companies') as any[]).map((item) => ({
    title: item.title?.body?.static || item.title?.b?.s,
    description: item.description?.body?.static || item.description?.b?.s,
    link: item.link?.body?.static || item.link?.b?.s,
  }))
})

const criterias = computed(() => {
 return (tm('gradingSection.criterias') as any[]).map((item) => ({
    title: item.title?.body?.static || item.title?.b?.s,
    description: item.description?.body?.static || item.description?.b?.s,
  }))
})

const protectingItems = computed(() => {
  return (tm('gradingSection.protectingItems') as any[]).map((item) => ({
    title: item.title?.body?.static || item.title?.b?.s,
    description: item.description?.body?.static || item.description?.b?.s,
  }))
})
</script>


<style lang="scss">
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
}

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
