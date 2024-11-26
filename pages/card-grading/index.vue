<template>
  <div class="grading-page">
    <header class="grading-page__header">
      <h1>{{ t('gradingSection.howToGrade') }}</h1>
      <p>{{ t('gradingSection.findHowToMaximizeValue') }}</p>
    </header>
    
    <index-guide
      :title="t('gradingSection.completeGuide')"
      :items="indexGuideItems" />
    <div>

      <article-card 
        section-id="what-is-grading"
        :title="t('gradingSection.whatIsGrading')" 
        :description="t('gradingSection.gradingExplanation')" 
        :final-description="t('gradingSection.gradingObjective')" 
        tone="gray"/>
  
      <article-card 
        id="grading-companies"
        :title="t('gradingSection.bestCompanies')" 
        :description="t('gradingSection.selectingGradingCompanyCrucial')" 
        :items="companiesList"
        :final-description="t('gradingSection.itsOnYou')" />
  
      <section id="grading-criteria" class="grading-criteria">
        <h2>Criterios Clave para el Grading de Cartas</h2>
        <p>El estado físico de tu carta Pokémon es evaluado según varios factores importantes que determinan su
          calificación final. Estos son los principales criterios que las casas de grading toman en cuenta:</p>
        <ul>
          <li><strong>Centrado:</strong> Este aspecto evalúa la simetría de los bordes de la carta. Una imagen
            perfectamente centrada añade valor.</li>
          <li><strong>Esquinas:</strong> Las esquinas deben estar limpias y sin daños visibles. Incluso el desgaste mínimo
            puede afectar la calificación.</li>
          <li><strong>Superficie:</strong> Examina cualquier imperfección como arañazos, manchas o decoloración. La
            limpieza es esencial para obtener una calificación alta.</li>
          <li><strong>Bordes:</strong> El desgaste o daños en los bordes reducen significativamente el valor de la carta.
          </li>
        </ul>
        <p>Para maximizar el estado de tu carta, utiliza fundas protectoras y evita manipularla sin guantes. Las cartas
          bien cuidadas no solo obtienen calificaciones más altas, sino que también se preservan mejor a lo largo del
          tiempo.</p>
      </section>
  
      <section id="comparison" class="comparison">
        <h2>Comparativa de las Mejores Casas de Grading</h2>
        <p>Elegir una casa de grading puede ser complicado. Aquí te ofrecemos una tabla comparativa con información clave
          sobre precios, tiempos de entrega y fiabilidad:</p>
        <table>
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
        <p>Recuerda que, aunque PSA y Beckett son reconocidas mundialmente, otras casas como APGrading pueden ser más
          accesibles para usuarios en Europa.</p>
      </section>
  
      <section id="how-to-protect" class="how-to-protect">
        <h2>Cómo Proteger tus Cartas Pokémon</h2>
        <p>Proteger tus cartas es crucial para mantener su estado óptimo, especialmente si planeas enviarlas a una casa de
          grading. Aquí tienes algunos consejos esenciales para asegurar que tus cartas se mantengan en perfectas
          condiciones:</p>
        <ul>
          <li>
            <strong>Utiliza fundas protectoras (sleeves):</strong>
            Estas fundas transparentes protegen la superficie de las cartas contra arañazos y polvo.
            <a class="button" href="" target="_blank" rel="noopener noreferrer">Compra sleeves aquí</a>.
          </li>
          <li>
            <strong>Guárdalas en *top loaders*:</strong>
            Estas fundas rígidas añaden una capa de protección contra impactos y presión.
            <a class="button" href="" target="_blank" rel="noopener noreferrer">Compra top loaders aquí</a>.
          </li>
          <li>
            <strong>Usa archivadores:</strong>
            Los archivadores son ideales para almacenar grandes colecciones y mantener las cartas organizadas.
            <a class="button" href="" target="_blank" rel="noopener noreferrer">Compra archivadores aquí</a>.
          </li>
          <li>
            <strong>Protege contra la luz solar directa:</strong> La exposición prolongada a la luz ultravioleta puede
            desvanecer los colores de las cartas. Considere almacenar las cartas en un lugar oscuro o en cajas especiales
            con protección UV.
          </li>
          <li>
            <strong>Mantén un ambiente seco:</strong>
            Evita la humedad usando sobres de silicagel para reducir el riesgo de deformaciones o moho.
          </li>
        </ul>
        <p>Con estos productos y consejos, puedes garantizar que tus cartas se mantengan en excelentes condiciones y
          aumenten su valor en el mercado de coleccionismo.</p>
      </section>
    </div>
  </div>
</template>

<script setup>
import ArticleCard from '@/components/general/ArticleCard.vue'
import IndexGuide from '@/components/general/IndexGuide.vue'

const { t } = useI18n()

const indexGuideItems = [
  {
    id: '#what-is-grading',
    text: t('gradingSection.whatIsGrading')
  },
  {
    id: '#grading-companies',
    text: t('gradingSection.bestCompanies')
  },
  {
    id: '#grading-criteria',
    text: t('gradingSection.gradingCriteria')
  },
  {
    id: '#comparison',
    text: t('gradingSection.companiesComparission')
  },
  {
    id: '#how-to-protect',
    text: t('gradingSection.howToProtectCards')
  },
]

const companiesList = [
  {
    title: t('gradingSection.companies.psa.title'),
    description: t('gradingSection.companies.psa.description'),
    link: 'https://www.psacard.com'
  },
  {
    title: t('gradingSection.companies.becket.title'),
    description: t('gradingSection.companies.becket.description'),
    link: 'https://www.beckett.com/grading'
  },
  {
    title: t('gradingSection.companies.apGrading.title'),
    description: t('gradingSection.companies.apGrading.description'),
    link: 'https://www.apgrading.com'
  },
  {
    title: t('gradingSection.companies.apGrading.title'),
    description: t('gradingSection.companies.apGrading.description'),
    link: 'https://www.pcagrade.com'
  },
  {
    title: t('gradingSection.companies.europeanGrading.title'),
    description: t('gradingSection.companies.europeanGrading.description'),
    link: 'https://www.europeangrading.com'
  }
]
</script>


<style lang="scss">
.grading-page {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 3rem;
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
