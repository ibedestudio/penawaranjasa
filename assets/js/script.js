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
    
    // Active section detection for dot navigation
    const sections = document.querySelectorAll('section[id]');
    const dots = document.querySelectorAll('.dot-nav a');
    
    function activateNavDot() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - windowHeight / 3;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if(scrollY >= sectionTop && scrollY < sectionBottom) {
                dots.forEach(dot => {
                    dot.classList.remove('active');
                    if(dot.getAttribute('href') === `#${sectionId}`) {
                        dot.classList.add('active');
                        // Tambahkan class untuk animasi
                        dot.classList.add('pulse');
                        setTimeout(() => dot.classList.remove('pulse'), 500);
                    }
                });
            }
        });
        
        // Check if we're at the top of the page
        if(scrollY < 100) {
            dots.forEach(dot => {
                dot.classList.remove('active');
                if(dot.getAttribute('href') === '#') {
                    dot.classList.add('active');
                    dot.classList.add('pulse');
                    setTimeout(() => dot.classList.remove('pulse'), 500);
                }
            });
        }
    }
    
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

    // Smooth scroll with easing
    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
    
    function smoothScroll(target, duration) {
        const start = window.pageYOffset;
        const distance = target - start;
        let startTime = null;
        
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            window.scrollTo(0, start + (distance * easeInOutQuad(progress)));
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }
        
        requestAnimationFrame(animation);
    }

    // Event listeners for dot navigation
    dots.forEach(dot => {
        dot.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') {
                smoothScroll(0, 1000);
            } else {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const targetPosition = targetSection.offsetTop - 50;
                    smoothScroll(targetPosition, 1000);
                }
            }
        });
    });

    // Check on scroll with throttling
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                checkFooterVisibility();
                activateNavDot();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initial checks
    checkFooterVisibility();
    activateNavDot();
}); 