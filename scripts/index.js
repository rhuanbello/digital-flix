// HEADER TRANSPARENT AT MOVEMENT
const showButton = () => window.scrollY >= 100 ? document.querySelector('header.fixed').classList.add('movement') : document.querySelector('header.fixed').classList.remove('movement')
window.addEventListener('scroll', () => showButton())