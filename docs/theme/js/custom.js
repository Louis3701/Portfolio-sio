// ==============================
// NAVBAR : scroll effect + active link
// ==============================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id], footer[id]');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Active link highlighting
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ==============================
// BURGER MENU
// ==============================
const burger = document.getElementById('burger');
const navMenu = document.querySelector('.nav-links');

if (burger) {
    burger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
}

// Close menu on nav link click
document.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('open'));
});

// ==============================
// MODALS
// ==============================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

// Close on backdrop click
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
});

// Close on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.open').forEach(modal => {
            modal.classList.remove('open');
            document.body.style.overflow = '';
        });
    }
});

// ==============================
// SMOOTH SCROLL
// ==============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ==============================
// REVEAL ON SCROLL
// ==============================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

// Stagger grids
document.querySelectorAll('.skills-panels, .projects-grid, .bts-grid').forEach(grid => {
    grid.querySelectorAll('.reveal').forEach((child, i) => {
        child.style.transitionDelay = `${i * 90}ms`;
    });
});

document.querySelectorAll('.timeline-item.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${i * 120}ms`;
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ==============================
// SKILL BARS
// ==============================
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-fill').forEach((bar, i) => {
                const target = bar.getAttribute('data-w');
                setTimeout(() => bar.style.width = target + '%', 200 + i * 80);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-panel').forEach(card => skillObserver.observe(card));

// ==============================
// CONTACT FORM
// ==============================
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('.btn-form');
    btn.textContent = 'Envoi en cours...';
    btn.disabled = true;

    // Simulate send
    setTimeout(() => {
        document.getElementById('form-success').classList.add('show');
        this.reset();
        btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Envoyer le message`;
        btn.disabled = false;
    }, 1200);
});