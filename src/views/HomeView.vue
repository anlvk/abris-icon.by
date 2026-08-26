<script setup>
import { ref, computed } from 'vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Иконописная мастерская «Абрис» | Роспись храмов и иконы на заказ в Беларуси',
  meta: [
    {
      name: 'description',
      content: 'Иконописная мастерская «Абрис» предлагает услуги по написанию канонических икон и художественной росписи храмов в Беларуси, России и странах СНГ.',
    },
    { property: 'og:title', content: 'Иконописная мастерская «Абрис» | Роспись храмов и иконы на заказ в Беларуси' },
    { property: 'og:description', content: 'Иконописная мастерская «Абрис» предлагает услуги по написанию канонических икон и художественной росписи храмов в Беларуси, России и странах СНГ.' },
    { property: 'og:url', content: 'https://abris-icon.by/' },
    { name: 'twitter:title', content: 'Иконописная мастерская «Абрис» | Роспись храмов и иконы на заказ в Беларуси' },
    { name: 'twitter:description', content: 'Иконописная мастерская «Абрис» предлагает услуги по написанию канонических икон и художественной росписи храмов в Беларуси, России и странах СНГ.' },
  ],
  link: [{ rel: 'canonical', href: 'https://abris-icon.by/' }],
})

const sectionTitle = ref('Иконописная мастерская «Абрис» — роспись храмов и иконы на заказ')
const currentTabId = ref('church-painting') 

// Состояние для модального окна (хранит URL текущей увеличенной картинки)
const activeLightboxImage = ref(null)

// Открыть картинку во весь экран (принимает строку URL)
const openLightbox = (imgUrl) => {
    activeLightboxImage.value = imgUrl
    document.body.style.overflow = 'hidden'
}

// Закрыть модальное окно
const closeLightbox = () => {
    activeLightboxImage.value = null
    document.body.style.overflow = ''
}

// Функция-помощник для превращения объекта импорта в SEO-массив.
// Имена файлов вида "photo_2026-07-11_13-46-02" ничего не говорят поисковику,
// поэтому для них используется описательный alt на основе labelPrefix + номер.
const formatImagesForSEO = (imagesObject, labelPrefix) =>
  Object.entries(imagesObject).map(([path, url], index) => {
    const fileName = path.split('/').pop().replace(/\.[^/.]+$/, '');
    const looksGeneric = /^(photo|img|image|dsc)[-_]/i.test(fileName);
    const formattedAlt = looksGeneric
      ? `${labelPrefix} — фото ${index + 1}`
      : fileName.replace(/[-_]/g, ' ').replace(/^\w/, (c) => c.toUpperCase());

    return { url, alt: formattedAlt };
  });

// 1. Импорт и создание списка для Soligorsk
const soligorskImagesObject = import.meta.glob(
  '../assets/soligorsk/*.{png,jpg,jpeg,webp,svg,PNG,JPG,JPEG,WEBP,SVG}',
  { eager: true, import: 'default' }
);
const soligorskImagesList = formatImagesForSEO(soligorskImagesObject, 'Роспись храма в Солигорске')

// 2. Импорт и создание списка для Icons
const iconsObject = import.meta.glob(
  '../assets/icons/*.{png,jpg,jpeg,webp,svg,PNG,JPG,JPEG,WEBP,SVG}',
  { eager: true, import: 'default' }
);
const iconsList = formatImagesForSEO(iconsObject, 'Икона ручной работы мастерской «Абрис»')


const productsList = ref([
    {
    id: 'church-painting',
    tabName: 'Роспись храма. Солигорск',
    title: 'Стенная роспись и роспись храмов',
    description: 'Выполняем профессиональную роспись православных храмов, соборов и часовен в различных стилях (византийский, академический, древнерусский). Используем долговечные силикатные и акриловые краски, строго соблюдая иконописные каноны и технологии подготовки стен.',
    images: soligorskImagesList // Передаем массив объектов { url, alt }
    },
    {
    id: 'iconostas',
    tabName: 'Иконы',
    title: 'Создание канонических икон ручной работы',
    description: 'Пишем святые образы по индивидуальным заказам, строго соблюдая православные иконописные каноны. В процессе работы мастера применяют натуральные минеральные пигменты, ручное золочение сусальным золотом, художественное эмалирование, резьбу по левкасу и мягкое патинирование для прихода первозданной красоты.',
    images: iconsList 
    },
    
])

const activeProduct = computed(() => {
    return productsList.value.find(item => item.id === currentTabId.value)
})

</script>

<template>
    <section class="services-section">
    <h1>{{ sectionTitle }}</h1>
    <p class="services-sub">Мастерская находится в Беларуси</p>

    <div class="services-container">
        <div class="services-tabs">
        <button 
            v-for="item in productsList" 
            :key="item.id"
            :class="['tab-btn', { active: currentTabId === item.id }]"
            @click="currentTabId = item.id"
        >
            {{ item.tabName }}
        </button>
        </div>

        <transition name="fade" mode="out-in">
        <div class="tab-content" :key="currentTabId" v-if="activeProduct">
            
            <!-- ГАЛЕРЕЯ -->
            <div class="tab-gallery" v-if="activeProduct.images.length > 0">
                <!-- ИСПРАВЛЕНО: берём img.url для пути и img.alt для описания. В метод openLightbox передаем именно строку url -->
                <img
                    v-for="(img, index) in activeProduct.images"
                    :key="index"
                    :src="img.url"
                    :alt="img.alt"
                    class="gallery-image"
                    loading="lazy"
                    decoding="async"
                    @click="openLightbox(img.url)"
                >
            </div>
            
            <div class="tab-gallery-empty" v-else>
                <p>Фотографии скоро появятся</p>
            </div>

            <div class="tab-text">
            <h3>{{ activeProduct.title }}</h3>
            <p>{{ activeProduct.description }}</p>
            </div>
        </div>
        </transition>
    </div>

    <!-- МОДАЛЬНОЕ ОКНО (LIGHTBOX) -->
    <transition name="lightbox-fade">
        <div class="lightbox-overlay" v-if="activeLightboxImage" @click="closeLightbox">
            <button class="lightbox-close" @click="closeLightbox">&times;</button>
            <!-- Сюда попадает строка-URL и корректно отображается -->
            <img :src="activeLightboxImage" class="lightbox-img" @click.stop alt="Увеличенное изображение">
        </div>
    </transition>
    </section>
</template>

<style scoped>
.services-section {
    max-width: 1200px;
    margin: 60px auto;
    padding: 0 5%;
    text-align: center;
}
.services-section h1 {
    font-size: 2.2rem;
    margin-bottom: 10px;
    font-weight: 400;
    color: var(--accent-green);
}
.services-sub {
    color: #666;
    margin-bottom: 50px;
}
.services-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 40px;
    text-align: left;
}
.services-tabs {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.tab-btn {
    background: none;
    border: none;
    padding: 18px 20px;
    text-align: left;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.3s ease;
    color: var(--text-dark);
    border-left: 3px solid transparent;
}
.tab-btn:hover {
    background-color: rgba(58, 77, 57, 0.05);
}
.tab-btn.active {
    background-color: var(--accent-green);
    color: var(--white);
    border-left: 3px solid #606c38;
}

.tab-content {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 30px;
    background-color: var(--white);
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.04);
}

.tab-gallery {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    max-height: 450px;
    overflow-y: auto;
    padding-right: 5px;
}

.tab-gallery::-webkit-scrollbar {
    width: 4px;
}
.tab-gallery::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
}

.tab-gallery-empty {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f9f9f9;
    border: 1px dashed #ddd;
    border-radius: 6px;
    height: 320px;
    color: #888;
}

.gallery-image {
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 6px;
    transition: transform 0.2s ease, filter 0.2s ease;
    cursor: pointer;
}
.gallery-image:hover {
    transform: scale(1.02);
    filter: brightness(0.9);
}

.tab-text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.tab-text h3 {
    font-size: 1.6rem;
    margin-bottom: 15px;
    font-weight: 400;
}
.tab-text p {
    color: #555;
    margin-bottom: 25px;
    font-size: 0.95rem;
    line-height: 1.7;
}
.read-more {
    color: var(--text-dark);
    text-decoration: none;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 0.85rem;
    margin-top: auto;
}

/* СТИЛИ ДЛЯ МОДАЛЬНОГО ОКНА (LIGHTBOX) */
.lightbox-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    cursor: zoom-out;
}

.lightbox-img {
    max-width: 90%;
    max-height: 85vh;
    object-fit: contain;
    border-radius: 4px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
    cursor: default;
}

.lightbox-close {
    position: absolute;
    top: 20px;
    right: 30px;
    background: none;
    border: none;
    color: #fff;
    font-size: 3rem;
    cursor: pointer;
    line-height: 1;
    transition: transform 0.2s;
}
.lightbox-close:hover {
    transform: scale(1.1);
}

.lightbox-fade-enter-active, .lightbox-fade-leave-active {
    transition: opacity 0.3s ease;
}
.lightbox-fade-enter-active .lightbox-img,
.lightbox-fade-leave-active .lightbox-img {
    transition: transform 0.3s ease;
}

.lightbox-fade-enter-from, .lightbox-fade-leave-to {
    opacity: 0;
}
.lightbox-fade-enter-from .lightbox-img {
    transform: scale(0.9);
}
.lightbox-fade-leave-to .lightbox-img {
    transform: scale(0.95);
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from { opacity: 0; transform: translateY(8px); }
.fade-leave-to { opacity: 0; transform: translateY(-8px); }

@media (max-width: 992px) {
    .tab-content { grid-template-columns: 1fr; }
    .tab-gallery { max-height: none; }
}

@media (max-width: 768px) {
    .services-container { grid-template-columns: 1fr; }
    .tab-content { padding: 20px; }
    .tab-gallery { grid-template-columns: repeat(2, 1fr); }
    .lightbox-close { right: 20px; top: 10px; font-size: 2.5rem; }
}
</style>
