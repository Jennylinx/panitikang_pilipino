
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        },
        {
            threshold: 0.8, 
        }
    );

    sections.forEach((section) => observer.observe(section));
});




document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.anime');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    });

    animatedElements.forEach(el => observer.observe(el));
});


