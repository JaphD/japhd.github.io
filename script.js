(() => {
  document.documentElement.classList.add('js');

  const initNavigation = () => {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('#nav-links');
    if (!toggle || !links) return;

    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      links.removeAttribute('data-open');
    };

    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      links.toggleAttribute('data-open', !open);
    });

    links.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  };

  const showSlide = (gallery, requestedIndex) => {
    const slides = Array.from(gallery.querySelectorAll('[data-gallery-slide]'));
    if (!slides.length) return;

    const index = (requestedIndex + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.hidden = slideIndex !== index;
    });

    gallery.dataset.galleryIndex = String(index);
    const current = gallery.querySelector('[data-gallery-current]');
    if (current) current.textContent = String(index + 1);
  };

  const initGallery = (gallery) => {
    const slides = gallery.querySelectorAll('[data-gallery-slide]');
    if (!slides.length) return;

    const total = gallery.querySelector('[data-gallery-total]');
    if (total) total.textContent = String(slides.length);
    showSlide(gallery, 0);

    gallery.querySelector('[data-gallery-previous]')?.addEventListener('click', () => {
      showSlide(gallery, Number(gallery.dataset.galleryIndex || 0) - 1);
    });
    gallery.querySelector('[data-gallery-next]')?.addEventListener('click', () => {
      showSlide(gallery, Number(gallery.dataset.galleryIndex || 0) + 1);
    });

    gallery.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const direction = event.key === 'ArrowLeft' ? -1 : 1;
      showSlide(gallery, Number(gallery.dataset.galleryIndex || 0) + direction);
    });
  };

  initNavigation();
  document.querySelectorAll('[data-gallery]').forEach(initGallery);
})();
