import "./scss/style.scss";

const root = document.getElementsByTagName('html')[0];
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal-overlay');
const modalContent = document.querySelector('.modal__content');

/**
 * Log a message
 * 
 * @param {String} message The message to log
 * @param {String} priority The log level eg. log, error etc
 */
const log = (message = '', priority = 'log') => {
    console[priority](message)
}

/**
 * Handle anchor tag clicks. Log the target element to the console
 * 
 * @param {*} e The event object
 */
const handleAnchorClick = (e) => {
    e.preventDefault()
    log(e.target)
}

document.querySelectorAll('a').forEach(el => {
    el.addEventListener('click', handleAnchorClick)
})

/**
 * Handle modal elements
 * 
 * @param {*} e The event object
 */
const openModal = (e) => {
    e.preventDefault()
    // Create image element
    const src = e.target.currentSrc;
    const img = document.createElement('img');
    img.src = src;
    modalContent.appendChild(img);

    // Assign classes to open modal
    root.classList.add('modal-is-open');
    modal.classList.add('modal--open');

    document.addEventListener('keydown', closeModal)
}

const modalTriggers = document.querySelectorAll('[data-modal-trigger]')
modalTriggers.forEach(el => {
    el.addEventListener('click', openModal)
})

const closeModal = (e) => {
    root.classList.remove('modal-is-open');
    modal.classList.remove('modal--open');

    const img = modalContent.querySelector('img');
    img && img.remove();

    document.removeEventListener('keydown', closeModal)
}

modalOverlay.addEventListener('click', (e) => closeModal(e))