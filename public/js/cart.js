// Preloader
window.addEventListener('load', () => {
    const loader = document.querySelector('.Preloader');
    loader.classList.add('Preloader-hidden');
    loader.addEventListener('transitionend', () => {
        document.body.classList.remove('Preloader')
    })
})