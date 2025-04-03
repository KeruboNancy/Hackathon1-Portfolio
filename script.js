
document.addEventListener('DOMContentLoaded', function() {
 
    document.getElementById('year').textContent = new Date().getFullYear();

  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const subtitle = document.querySelector('.hero-content p');
const text = "Crafting digital experiences with precision and passion. Transforming ideas into seamless digital experiences with precision and creativity.";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        subtitle.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

subtitle.textContent = ""; // Clear the text first
typeWriter();


    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.querySelector('.hero').style.transform = `translateY(${scrolled * 0.5}px)`;
    });
});
