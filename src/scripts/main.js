document.querySelectorAll('.button--fire').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });

    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        if (targetId) {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.era');
    let lastScrollTop = 0;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {

                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop < lastScrollTop) { 
            sections.forEach((section, index) => {
                if (!section.classList.contains('visible')) {
                }
            });
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});


