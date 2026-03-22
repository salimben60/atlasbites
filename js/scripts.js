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
function updateMobileCTA() {
    const bar = document.getElementById('mobile-cta');
    if (window.innerWidth < 768) {
        bar.style.display = 'flex';
        document.body.style.paddingBottom = '72px';
    } else {
        bar.style.display = 'none';
        document.body.style.paddingBottom = '0';
    }
}

// Run on load and resize
updateMobileCTA();
window.addEventListener('resize', updateMobileCTA);

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
