<template>
  <div class="grading-page">
    <header>
      <h1>Gradeo de Cartas Pokémon</h1>
      <p>Descubre qué es el gradeo, cuáles son las casas más importantes y cómo evaluarlas.</p>
    </header>

    <section class="what-is-grading">
      <h2>¿Qué es el Gradeo?</h2>
      <p>El gradeo es el proceso por el cual una carta es evaluada y clasificada según su estado. Las cartas más bien cuidadas reciben mejores notas, lo que aumenta su valor de reventa.</p>
    </section>

    <section class="grading-companies">
      <h2>Casas de Gradeo Famosas</h2>
      <ul>
        <li><strong>PSA</strong> - Una de las casas más reconocidas a nivel mundial.</li>
        <li><strong>Beckett</strong> - Otra casa de renombre, conocida por ser muy estricta.</li>
        <li><strong>APGrading</strong> - Más accesible en Europa y ofrece servicios competitivos.</li>
        <li><strong>PCAgrade</strong> - Popular en Europa, ofrece un servicio rápido.</li>
        <li><strong>EuropeanGrading</strong> - Famosa por su servicio en Europa y su atención al detalle.</li>
      </ul>
    </section>

    <section class="grading-criteria">
      <h2>¿Qué tienen en cuenta?</h2>
      <p>Cada casa de gradeo evalúa las cartas según varios criterios:</p>
      <ul>
        <li><strong>Centrado</strong> - La alineación de la imagen en la carta.</li>
        <li><strong>Esquinas</strong> - El estado de las esquinas de la carta.</li>
        <li><strong>Superficie</strong> - La presencia de arañazos o marcas.</li>
        <li><strong>Bordes</strong> - Desgaste visible en los bordes de la carta.</li>
      </ul>
    </section>

    <section class="comparison">
      <h2>Comparativa entre casas de gradeo</h2>
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
    </section>
  </div>
</template>

<style>
.grading-page {
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  color: #333;
}

header {
  text-align: center;
  margin-bottom: 40px;
}

p {
  font-size: 1.2em;
  line-height: 1.6;
}

h2 {
  font-size: 2em;
  font-weight: 600;
  margin-top: 40px;
  color: #007bff;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  font-size: 1.1em;
  margin-bottom: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

table, th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center;
}

th {
  background-color: #f4f4f4;
  font-weight: 700;
}
</style>
