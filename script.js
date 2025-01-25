document.addEventListener('DOMContentLoaded', function() {
    // Animasi untuk header
    const header = document.querySelector('header');
    header.style.opacity = '0';
    setTimeout(() => {
        header.style.transition = 'opacity 1s ease-in-out';
        header.style.opacity = '1';
    }, 100);

    // Animasi untuk service cards
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease-in-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + (index * 200));
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
}); 