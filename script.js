// ════════════════════════════════════════
// NAVBAR & BURGER MENU
// ════════════════════════════════════════
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

if (burger) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close menu when clicking on a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ════════════════════════════════════════
// MODALS
// ════════════════════════════════════════
function openModal(id) {
    const modalId = id + 'Modal';
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(id) {
    const modalId = id + 'Modal';
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
});

// ════════════════════════════════════════
// SCROLL REVEAL ANIMATIONS
// ════════════════════════════════════════
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe all cards
document.querySelectorAll('.project-card, .stage-card, .timeline-item, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ════════════════════════════════════════
// SMOOTH SCROLL FOR ANCHOR LINKS
// ════════════════════════════════════════
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ════════════════════════════════════════
// NAVBAR ACTIVE LINK ON SCROLL
// ════════════════════════════════════════
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.style.color = '';
        if (item.getAttribute('href') === '#' + current) {
            item.style.color = 'var(--primary)';
        }
    });
});

// ════════════════════════════════════════
// SKILL BARS ANIMATION ON SCROLL
// ════════════════════════════════════════
const skillBars = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillFill = entry.target;
            const width = skillFill.style.width;
            skillFill.style.width = '0';
            
            setTimeout(() => {
                skillFill.style.transition = 'width 0.8s ease';
                skillFill.style.width = width;
            }, 100);
            
            skillObserver.unobserve(skillFill);
        }
    });
}, {
    threshold: 0.5
});

skillBars.forEach(bar => skillObserver.observe(bar));

// ════════════════════════════════════════
// PAGE TRANSITIONS
// ════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.3s ease';
});

// ════════════════════════════════════════
// ESCAPE KEY TO CLOSE MODALS
// ════════════════════════════════════════
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.show').forEach(modal => {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        });
    }
});
