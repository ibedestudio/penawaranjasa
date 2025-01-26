// Dot Navigation Functionality
function initDotNav() {
    const sections = document.querySelectorAll('section[id]');
    const dotLinks = document.querySelectorAll('.dot-nav a');
    const dotNav = document.querySelector('.dot-nav');

    function activateNavDot() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Check if near the footer to hide dot navigation
        if (scrollY + windowHeight > documentHeight - 100) {
            dotNav.classList.add('hidden');
        } else {
            dotNav.classList.remove('hidden');
        }

        sections.forEach(section => {
            const sectionTop = section.offsetTop - windowHeight / 3;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                dotLinks.forEach(link => {
                    link.classList.remove('active', 'pulse');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        if (!link.classList.contains('active')) {
                            link.classList.add('active', 'pulse');
                            setTimeout(() => link.classList.remove('pulse'), 500);
                        }
                    }
                });
            }
        });
    }

    // Smooth scroll for dot navigation
    dotLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const headerOffset = 0; // Karena sudah tidak ada header
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    window.addEventListener('scroll', activateNavDot);
    window.addEventListener('load', activateNavDot);
}

// Initialize dot navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', initDotNav); 