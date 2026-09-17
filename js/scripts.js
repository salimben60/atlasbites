// ─── Scroll reveal animation ───
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            // Stagger siblings
            const siblings = entry.target.parentElement.querySelectorAll('.reveal');
            siblings.forEach((el, idx) => {
                setTimeout(() => el.classList.add('visible'), idx * 80);
            });
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

// ─── Mobile sticky bar ───
// Handled entirely by CSS (@media max-width:768px in style.css) — no JS needed.
// (Previously duplicated here via inline styles, which both forced a layout
// reflow on every resize and silently overrode the safe-area-inset padding
// set in CSS, since inline styles win over media queries.)

// ─── Mobile nav toggle (replaces Bootstrap's collapse component) ───
const navToggler = document.querySelector('.navbar-toggler');
const navCollapse = document.getElementById('navbarNav');
if (navToggler && navCollapse) {
    navToggler.addEventListener('click', () => {
        const isOpen = navCollapse.classList.toggle('show');
        navToggler.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // Close the menu after tapping a link (mobile UX)
    navCollapse.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navCollapse.classList.remove('show');
            navToggler.setAttribute('aria-expanded', 'false');
        });
    });
}

// ─── Form success feedback ───
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        const btn = form.querySelector('.btn-submit');
        btn.textContent = 'Sending your request…';
        btn.style.opacity = '0.7';
        btn.disabled = true;
    });
}
