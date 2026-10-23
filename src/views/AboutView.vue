<script setup>
import { useHead } from '@unhead/vue'
// Перенесите импорт сюда, чтобы about.vue знал об этой картинке
import studioFounder from '../assets/studio-founder.jpg'

useHead({
  title: 'О мастерской «Abris - icon» | Иконопись и роспись храмов в Беларуси',
  meta: [
    {
      name: 'description',
      content: 'История и опыт иконописной мастерской «Abris - icon»: роспись храмов в Беларуси, России, Сербии и Испании. Художественный руководитель — Дмитрий Левчук.',
    },
    { property: 'og:title', content: 'О мастерской «Abris - icon» | Иконопись и роспись храмов в Беларуси' },
    { property: 'og:description', content: 'История и опыт иконописной мастерской «Abris - icon»: роспись храмов в Беларуси, России, Сербии и Испании. Художественный руководитель — Дмитрий Левчук.' },
    { property: 'og:url', content: 'https://abris-icon.by/about' },
    { name: 'twitter:title', content: 'О мастерской «Abris - icon» | Иконопись и роспись храмов в Беларуси' },
    { name: 'twitter:description', content: 'История и опыт иконописной мастерской «Abris - icon»: роспись храмов в Беларуси, России, Сербии и Испании. Художественный руководитель — Дмитрий Левчук.' },
  ],
  link: [{ rel: 'canonical', href: 'https://abris-icon.by/about' }],
})
</script>

<template>
  <section class="about-page">
    <div class="about-grid">
      <div class="about-text-block">
        <!-- <span class="subtitle">• НАШИ ЦЕННОСТИ</span> -->
        <h1>О мастерской «Abris - icon»</h1>
        
        <div class="about">
            <p>Мастерская Abris - icon это мастерская написания икон, проектирования и росписи храмов, преподавание и проведение мастер-классов. Я её создатель и руководитель Дмитрий Олегович Левчук. 
</p>
            <p>Творческая биография</p>

        <p>С 2015 по 2021 год обучался на иконописном факультете при МПДА</p>

        <p>С 2016 по настоящее время занимаюсь росписью храмов.</p>

    <ol>
        <li>В настоящее время с 15 мая 2025г.  являюсь художественным руководителем росписи храма в г. Солигорск, Минской обл., храм Святителя Николая Чудотворца.</li>
        <li>Беларусь, г. Копыль, Храм Вознесения Господня ( был начальником и худ. руководителем росписи храма).</li>
        <li>Беларусь,аг. Лучин, Храм Казанской ик. Б.М.</li>
        <li>Россия, г. Самара, Софийский Собор.</li>
        <li>Россия, г. Тольятти, Храм Патриарха Тихона.</li>
        <li>Россия, г. Волгоград, Собор св. Александра Невского.</li>
        <li>Россия, г. Самара, Собор св.-х Кирилла и Мефодия.</li>
        <li>Россия, г. Электросталь, Вознесенский Собор. </li>
        <li>Испания, г. Мадрид, Собор Св. Равноапостольной Марии Магдалины.</li>
        <li>Россия, г. Челябинск, Христорождественский собор.</li>
        <li>Сербия, г. Белград, Храм святой Троицы.</li>
        <li>Сочи, п.г.т. Красная Поляна, Церковь Харалампия.</li>
        <li>Россия, г. Ярославль, Успенский Собор.</li>
    </ol>

        </div>

        </div>
      <div class="about-image-block">
        <img :src="studioFounder" alt="Дмитрий Левчук — художественный руководитель иконописной мастерской «Abris - icon»" loading="lazy" decoding="async">
      </div>
    </div>

    <div class="features-grid">
      <div class="feature-card">
        <h3>Каноничное исполнение</h3>
        <p>Выдерживаем строгие богословские и художественные каноны. Сочетаем традиции древнерусской и византийской живописи с современными технологиями архитектурного проектирования.</p>
      </div>
      <div class="feature-card">
        <h3>Традиционные материалы</h3>
        <p>Пишем иконы на липовых досках с дубовыми шпонками, используем натуральную яичную темперу, минеральные пигменты и сусальное золото. Для росписи стен применяем долговечные силикатные краски.</p>
      </div>
      <div class="feature-card">
        <h3>Масштаб и география</h3>
        <p>Разрабатываем комплексные проекты под ключ — от эскизов до финишных лесов. Успешно расписываем соборы любого объема в Беларуси, России, странах СНГ и дальнего зарубежья.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-page {
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 5%;
}
.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 50px;
  align-items: center;
  margin-bottom: 60px;
}
.subtitle {
  font-size: 0.8rem;
  letter-spacing: 2px;
  color: #888;
}
.about-text-block h1 {
  font-size: 2.2rem;
  margin: 15px 0 25px;
  font-weight: 400;
  color: var(--accent-green);
  line-height: 1.3;
}
.about-text-block p {
  color: #555;
  margin-bottom: 20px;
  font-size: 1rem;
  line-height: 1.7;
}
.about-image-block img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  border-top: 1px solid var(--accent-light);
  padding-top: 50px;
}
.feature-card h3 {
  font-size: 1.2rem;
  margin-bottom: 12px;
  font-weight: 500;
  color: var(--text-dark);
}
.feature-card p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; gap: 30px; }
  .features-grid { grid-template-columns: 1fr; }
  .about-image-block img { height: 280px; }
}
</style>
