/* ===================== CURSOR ===================== */
const cursorWrapper = document.getElementById('cursor-wrapper');
const cursorDot = document.getElementById('cursor-dot');
const cursorCircle = document.getElementById('cursor-circle');

if (cursorWrapper && cursorDot && cursorCircle) {
  let mouseX = 0, mouseY = 0;
  let circleX = 0, circleY = 0;

  // Show wrapper and move dot immediately on first mousemove
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (cursorWrapper.style.display !== 'block') {
      cursorWrapper.style.display = 'block';
      // Teleport circle to cursor on first appearance (no lag jump)
      circleX = mouseX;
      circleY = mouseY;
    }

    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top  = mouseY + 'px';
  });

  // Circle follows with smooth lag
  function animateCircle() {
    circleX += (mouseX - circleX) * 0.12;
    circleY += (mouseY - circleY) * 0.12;
    cursorCircle.style.left = circleX + 'px';
    cursorCircle.style.top  = circleY + 'px';
    requestAnimationFrame(animateCircle);
  }
  animateCircle();

  // Hover state: dot grows to match circle size
  const hoverTargets = 'a, button, .faq-item__question, .checkbox-label, .stack-item, .project-card, .service-card, .nav__link, .nav__dropdown-wrapper';

  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor--hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor--hover'));
  });
}

/* ===================== NAVBAR SCROLL ===================== */
const nav = document.getElementById('nav');
const heroSection = document.getElementById('home');

window.addEventListener('scroll', () => {
  const threshold = heroSection ? heroSection.offsetHeight : window.innerHeight;
  nav.classList.toggle('scrolled', window.scrollY >= threshold);
}, { passive: true });

/* ===================== MOBILE MENU ===================== */
const navToggle = document.getElementById('nav-toggle');
const navMobile = document.getElementById('nav-mobile');

navToggle.addEventListener('click', () => {
  const isOpen = navMobile.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu on link click
navMobile.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ===================== FAQ ACCORDION ===================== */
document.querySelectorAll('.faq-item__question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const isOpen = item.classList.contains('open');

    // Close all open items
    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      if (openItem !== item) openItem.classList.remove('open');
    });

    // Toggle clicked item
    item.classList.toggle('open', !isOpen);
  });
});

/* ===================== SCROLL ANIMATIONS ===================== */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
);

const animatedSelectors = [
  '.service-card',
  '.project-card',
  '.testimonial-card',
  '.process-step',
  '.stack-item',
  '.faq-item',
  '.section-header',
];

document.querySelectorAll(animatedSelectors.join(', ')).forEach((el, i) => {
  el.classList.add('fade-up');
  // Stagger siblings in the same grid/list
  const siblings = el.parentElement.querySelectorAll(':scope > *');
  const siblingIndex = Array.from(siblings).indexOf(el);
  if (siblingIndex > 0) {
    el.style.transitionDelay = `${Math.min(siblingIndex * 0.08, 0.32)}s`;
  }
  observer.observe(el);
});

/* ===================== HERO SLIDER ===================== */
const heroSlides = document.querySelectorAll('.hero__slide');
const heroProgressBar = document.getElementById('hero-progress-bar');
const heroNextBtn = document.getElementById('hero-slide-next');

if (heroSlides.length > 1 && heroProgressBar) {
  let current = 0;
  const DURATION = 4000;
  let autoTimer = null;

  function goToSlide(index) {
    heroSlides[current].classList.remove('active');
    current = (index + heroSlides.length) % heroSlides.length;
    heroSlides[current].classList.add('active');
    startProgress();
  }

  function startProgress() {
    clearTimeout(autoTimer);
    // Reset bar instantly, then animate
    heroProgressBar.style.transition = 'none';
    heroProgressBar.style.width = '0%';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        heroProgressBar.style.transition = `width ${DURATION}ms linear`;
        heroProgressBar.style.width = '100%';
      });
    });
    autoTimer = setTimeout(() => goToSlide(current + 1), DURATION);
  }

  if (heroNextBtn) {
    heroNextBtn.addEventListener('click', () => goToSlide(current + 1));
  }

  startProgress();
}

/* ===================== LIVE CLOCKS ===================== */
function formatTime(date) {
  return date.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Europe/Paris',
  });
}

function updateClocks() {
  const now = new Date();
  const timeStr = formatTime(now);

  const parisEl = document.getElementById('paris-time');
  const cannesEl = document.getElementById('cannes-time');

  if (parisEl) parisEl.textContent = timeStr;
  if (cannesEl) cannesEl.textContent = timeStr; // Same timezone
}

updateClocks();
setInterval(updateClocks, 1000);

/* ===================== CONTACT FORM ===================== */
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;

    btn.textContent = 'Envoi en cours...';
    btn.disabled = true;

    // TODO: wire up to a real backend (Formspree, Resend, etc.)
    setTimeout(() => {
      btn.textContent = 'Message envoyé ✓';
      form.reset();
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
      }, 3000);
    }, 1000);
  });
}

/* ===================== SMOOTH ANCHOR SCROLL ===================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;

    e.preventDefault();
    const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 68;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 24;

    window.scrollTo({ top, behavior: 'smooth' });
  });
});
