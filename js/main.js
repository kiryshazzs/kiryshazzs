// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href') === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          window.scrollTo({
              top: target.offsetTop - 80,
              behavior: 'smooth'
          });
      }
  });
});

// Фиксированная шапка при скролле
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
  } else {
      header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  }
});

// Аккордеон FAQ
document.querySelectorAll('.faq-header').forEach(header => {
  header.addEventListener('click', () => {
      const item = header.parentElement;
      item.classList.toggle('active');
      
      // Закрытие других открытых элементов
      document.querySelectorAll('.faq-item').forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
              otherItem.classList.remove('active');
          }
      });
  });
});

// Анимация при загрузке и скролле
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.process-step, .when-card, .section-title');
  
  elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
      }
  });
};

// Начальные стили для анимации
document.querySelectorAll('.process-step, .when-card, .section-title').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
});

// Запуск анимаций
window.addEventListener('load', () => {
  animateOnScroll();
  
  // Постепенное появление карточек
  document.querySelectorAll('.process-step').forEach((el, index) => {
      el.style.transitionDelay = `${index * 0.1}s`;
  });
  
  document.querySelectorAll('.when-card').forEach((el, index) => {
      el.style.transitionDelay = `${index * 0.15}s`;
  });
});

document.querySelector('.logo-text').addEventListener('click', function(e) {
  if (this.getAttribute('href') === '#home') {
      e.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  }
});

window.addEventListener('scroll', animateOnScroll);