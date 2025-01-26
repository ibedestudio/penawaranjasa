document.addEventListener('DOMContentLoaded', function() {
    const toggleHeaders = document.querySelectorAll('.toggle-header');
    
    toggleHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle icon rotation
            this.classList.toggle('collapsed');
            
            // Toggle content visibility
            const subFeatures = this.nextElementSibling;
            if (subFeatures.classList.contains('sub-features')) {
                subFeatures.classList.toggle('show');
            }
        });
    });
}); 