<template>
  <section class="contacts-page">
    <div class="contacts-grid">
      <!-- Левый блок: Контакты и форма -->
      <div class="contacts-text-block">
        <h1>Контакты мастерской «Abris - icon»</h1>
        
        <div class="contacts-info">
          <p><strong>Руководитель:</strong> Дмитрий Олегович Левчук</p>
          <p><strong>Мастерская:</strong> Abris - icon (иконопись, роспись и проектирование храмов)</p>
          <p><strong>Телефон / Telegram:</strong> +375447286426</p>
          <p><strong>Instagram:</strong> <a href="https://www.instagram.com/abris_icon">abris_icon</a></p>
        </div>

        <!-- Форма обратной связи 
        <form @submit.prevent="handleSubmit" class="contact-form">
          <h3>Обсудить проект или заказать икону</h3>
          
          <div class="form-group">
            <input v-model="form.name" type="text" placeholder="Ваше имя" required />
          </div>
          
          <div class="form-group">
            <input v-model="form.email" type="email" placeholder="Ваш Email или телефон" required />
          </div>
          
          <div class="form-group">
            <textarea v-model="form.message" placeholder="Опишите ваши пожелания (размер иконы, детали росписи храма)" required></textarea>
          </div>
          
          <button type="submit" class="submit-btn">Отправить запрос</button>
        </form>-->
      </div>
    </div>

    <!-- Нижний блок: Преимущества связи или этапы работы -->
    <div class="features-grid">
      <div class="feature-card">
        <h3>Индивидуальный просчет</h3>
        <p>Смета росписи храма или проектирования зависит от объема и сложности. Подготовим детальный расчет за 2-3 дня.</p>
      </div>
      <div class="feature-card">
        <h3>География работы</h3>
        <p>Выезжаем на роспись храмов по всей Беларуси, России и странам СНГ. Опыт удаленной координации крупных объектов.</p>
      </div>
      <div class="feature-card">
        <h3>Консультация мастера</h3>
        <p>Дмитрий Левчук лично ответит на все вопросы, поможет определиться со стилистикой и каноническими деталями.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Контакты | Иконописная мастерская «Abris - icon» в Беларуси',
  meta: [
    {
      name: 'description',
      content: 'Свяжитесь с иконописной мастерской «Abris - icon»: телефон, Telegram и Instagram. Расчёт стоимости росписи храма или заказа иконы за 2-3 дня.',
    },
    { property: 'og:title', content: 'Контакты | Иконописная мастерская «Abris - icon» в Беларуси' },
    { property: 'og:description', content: 'Свяжитесь с иконописной мастерской «Abris - icon»: телефон, Telegram и Instagram. Расчёт стоимости росписи храма или заказа иконы за 2-3 дня.' },
    { property: 'og:url', content: 'https://abris-icon.by/contacts' },
    { name: 'twitter:title', content: 'Контакты | Иконописная мастерская «Abris - icon» в Беларуси' },
    { name: 'twitter:description', content: 'Свяжитесь с иконописной мастерской «Abris - icon»: телефон, Telegram и Instagram. Расчёт стоимости росписи храма или заказа иконы за 2-3 дня.' },
  ],
  link: [{ rel: 'canonical', href: 'https://abris-icon.by/contacts' }],
})

const form = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  alert(`Спасибо, ${form.value.name}! Мы свяжемся с вами в ближайшее время.`)
  form.value = { name: '', email: '', message: '' }
}
</script>

<style scoped>
/* Основной контейнер один в один с about-page */
.contacts-page {
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 5%;
}

/* Двухколоночный грид */
.contacts-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 50px;
  align-items: start; /* Изменено на start, чтобы форма не растягивалась искусственно */
  margin-bottom: 60px;
}

/* Стилизация заголовка в вашем фирменном стиле */
.contacts-text-block h1 {
  font-size: 2.2rem;
  margin: 15px 0 25px;
  font-weight: 400;
  color: var(--accent-green);
  line-height: 1.3;
}

/* Блок текстовой информации */
.contacts-info {
  margin-bottom: 35px;
}

.contacts-info p {
  color: #555;
  margin-bottom: 12px;
  font-size: 1rem;
  line-height: 1.6;
}

.contacts-info strong {
  color: var(--text-dark);
  font-weight: 500;
}

/* Стилизация формы */
.contact-form {
  border-top: 1px solid var(--accent-light, #eee);
  padding-top: 30px;
}

.contact-form h3 {
  font-size: 1.3rem;
  margin-bottom: 20px;
  font-weight: 400;
  color: var(--text-dark);
}

.form-group {
  margin-bottom: 15px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px 15px;
  font-size: 0.95rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  color: var(--text-dark);
  transition: border-color 0.2s;
  box-sizing: border-box;
}

.contact-form textarea {
  height: 120px;
  resize: vertical;
  font-family: inherit;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--accent-green);
}

/* Кнопка в тон вашей теме */
.submit-btn {
  padding: 12px 30px;
  background-color: var(--accent-green, #42b983);
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.submit-btn:hover {
  opacity: 0.9;
}

/* Правый блок с изображением */
.contacts-image-block img {
  width: 100%;
  height: 500px; /* Немного выше, чтобы сбалансировать высоту формы */
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

/* Нижний блок преимуществ */
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  border-top: 1px solid var(--accent-light, #eee);
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

/* Адаптивность для мобильных устройств */
@media (max-width: 768px) {
  .contacts-grid { 
    grid-template-columns: 1fr; 
    gap: 40px; 
  }
  .features-grid { 
    grid-template-columns: 1fr; 
  }
  .contacts-image-block img { 
    height: 300px; 
    grid-row: 1; /* Картинка на мобилках встанет наверх, перед контактами */
  }
}
</style>
