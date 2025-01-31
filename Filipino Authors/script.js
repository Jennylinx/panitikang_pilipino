const navLinks = document.querySelectorAll("a");
const currentURL = window.location.href;

navLinks.forEach((link) => {
    if (link.href === currentURL) {
        link.classList.add('active');
    }
});

let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    })
}

window.addEventListener('load', () => {
    window.onscroll();  
});

const faqItems = document.querySelectorAll('.faq-item');
const faqContainer = document.querySelector('.faq');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-questions');
    const answer = item.querySelector('.faq-answer');
    const chevron = item.querySelector('.fa');

    question.addEventListener('click', () => {

        const isOpen = answer.style.display === 'block';
        answer.style.display = isOpen ? 'none' : 'block';
        chevron.classList.toggle('open', !isOpen);


        const openAnswers = [...faqItems].filter(item => {
            const answer = item.querySelector('.faq-answer');
            return answer.style.display === 'block';
        }).length;


        if (openAnswers === 0) {
            faqContainer.style.height = '60vh'; 
        } 
        else if(openAnswers === 1) {
            faqContainer.style.height = '65vh';
        }
        else if (openAnswers === 2) {
            faqContainer.style.height = '78vh'; 
        }
        else if (openAnswers === 3) {
            faqContainer.style.height = '90vh'; 
        }
        else if(openAnswers === 4) {
            faqContainer.style.height = '100vh';
        }
    });
});









    