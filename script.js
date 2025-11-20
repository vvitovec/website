// Jednoduchá interaktivita pro menu a formulář

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  // Mobile menu toggle
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Zavřít menu po kliknutí na odkaz na mobilu
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Formulář poptávky na stránce EasyFlex
  const inquiryForm = document.getElementById('inquiry-form');
  const feedback = document.querySelector('.form-feedback');

  if (inquiryForm && feedback) {
    inquiryForm.addEventListener('submit', (event) => {
      event.preventDefault();
      feedback.textContent = 'Děkuji za poptávku, brzy se ozvu!';
      inquiryForm.reset();
    });
  }
});
