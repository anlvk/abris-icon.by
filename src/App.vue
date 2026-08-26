<script setup>
import { ref } from 'vue'
import { useHead } from '@unhead/vue'

// 1. ИМПОРТИРУЕМ ИЗОБРАЖЕНИЕ: Сборщик Vite сам подставит правильный путь при сборке проекта
import bgLogo from './assets/abris-logo.jpg'
import logoImg from './assets/abris-logo.jpg'

const companyName = ref('Абрис')

// Структурированные данные (JSON-LD) — одинаковые на всех страницах, помогают
// поисковикам понять, что это за организация (без физического адреса — его нет в открытых данных)
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Иконописная мастерская «Абрис»',
        alternateName: 'абрис Ikon',
        description: 'Написание канонических икон и художественная роспись храмов.',
        url: 'https://abris-icon.by/',
        telephone: '+375447286426',
        image: 'https://abris-icon.by/og-image.jpg',
        areaServed: {
          '@type': 'Country',
          name: 'Беларусь',
        },
        sameAs: [
          'https://www.instagram.com/abris_icon',
        ],
      },
    },
  ],
})
</script>

<template>
  <div>
    <!-- Общая шапка сайта -->
    <header class="header">
      <nav class="nav-links">
        <router-link to="/">Продукция</router-link>
        <router-link to="/about">О мастерской</router-link>
        <router-link to="/contacts">Контакты</router-link> 
      </nav>
      <a href="tel:+375447286426" class="btn-book">Позвонить мастерам</a>
    </header>

    <!-- Общий баннер (Hero) -->
    <section class="hero">
      <!-- <h1>{{ companyName }}</h1> -->
      <div class="logo-wrapper">
        <img :src="logoImg" alt="Логотип АБРИС" class="hero-logo">
      </div>
      <p>Изготовление икон и роспись храмов</p>
    </section>

    <!-- Сюда динамически загружаются компоненты страниц (HomeView или AboutView) -->
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5%;
  position: absolute;
  width: 100%;
  z-index: 10;
  background: linear-gradient(to bottom, rgba(0,0,0,0.5), transparent);
}

.nav-links a {
  color: var(--white);
  text-decoration: none;
  margin: 0 15px;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s ease;
}

/* Специфический класс Vue Router для активной в данный момент ссылки */
.nav-links .router-link-active {
  border-bottom-color: var(--white);
}

.btn-book {
  background-color: var(--accent-green);
  color: var(--white);
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.btn-book:hover {
  background-color: #2b3a2a;
}

.hero {
  position: relative;
  height: 50vh;
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('./assets/soligorsk/photo_2026-07-11_13-46-23.jpg') no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--white);
  padding: 0 20px;
}

.hero h1 {
  font-size: 3.5rem;
  letter-spacing: 6px;
  margin-bottom: 15px;
  font-weight: 300;
}

.hero p {
  font-size: 1.1rem;
  max-width: 600px;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .hero h1 { font-size: 2.2rem; }
}

.hero-logo {
  width: 100px;
  margin: 20px 0;
}

</style>
