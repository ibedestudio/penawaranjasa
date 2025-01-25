document.addEventListener('DOMContentLoaded', function() {
   

    // Animasi untuk service cards
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });

    // Efek hover untuk tombol
    const btn = document.querySelector('.btn');
    btn.addEventListener('mouseover', function() {
        this.style.transform = 'translate(-4px, -4px)';
        this.style.boxShadow = '12px 12px 0 var(--secondary-color)';
    });

    btn.addEventListener('mouseout', function() {
        this.style.transform = 'translate(0, 0)';
        this.style.boxShadow = '8px 8px 0 var(--secondary-color)';
    });

    // Efek glitch untuk judul
    const title = document.querySelector('h1');
    setInterval(() => {
        title.style.textShadow = `
            ${Math.random() * 10}px ${Math.random() * 10}px 0 var(--secondary-color),
            ${Math.random() * -10}px ${Math.random() * -10}px 0 var(--accent-color)
        `;
        setTimeout(() => {
            title.style.textShadow = '4px 4px 0 var(--secondary-color), 8px 8px 0 var(--accent-color)';
        }, 100);
    }, 3000);

    // Hide dot navigation when reaching footer
    const dotNav = document.querySelector('.dot-nav');
    const footer = document.querySelector('.footer');
    
    function checkFooterVisibility() {
        if (!dotNav || !footer) return;
        
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (footerTop <= windowHeight + 100) {
            dotNav.classList.add('hidden');
        } else {
            dotNav.classList.remove('hidden');
        }
    }

    // Check on scroll with throttling
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                checkFooterVisibility();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initial check
    checkFooterVisibility();
}); 