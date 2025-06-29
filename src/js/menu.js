(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'), // кнопка відкриття меню
    closeModalBtn: document.querySelector('[data-menu-close]'), // кнопка закриття меню
    modal: document.querySelector('[data-menu]'), // саме мобільне меню
  };

  if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) return;

  refs.openModalBtn.addEventListener('click', () => {
    refs.modal.classList.add('is-open'); // додаємо клас для показу меню
  });

  refs.closeModalBtn.addEventListener('click', () => {
    refs.modal.classList.remove('is-open'); // прибираємо клас, меню ховається плавно
  });

  const menuLinks = refs.modal.querySelectorAll('.menu-link'); // тільки лінки з мобільного меню

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      refs.modal.classList.remove('is-open'); // при кліку по пункту меню — ховаємо меню
    });
  });
})();
