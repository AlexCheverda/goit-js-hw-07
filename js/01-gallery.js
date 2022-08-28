import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryCard = document.querySelector('.gallery');
const cardsMarkup = createCardsMarkup(galleryItems);

galleryCard.insertAdjacentHTML('beforeend', cardsMarkup);
galleryCard.addEventListener('click', onGallaryCardClick);

function createCardsMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `;
    })
    .join('');
}

function onGallaryCardClick(evt) {
    evt.preventDefault();

    const isGallaryCard = evt.target.classList.contains('gallery__image');

    if (!isGallaryCard) {
        return;
    }

    const galleryEl = evt.target.dataset.source;

    const instance = basicLightbox.create(`
    <img class="modal__image" src="${galleryEl}" width="800" height="600">
    `)

    instance.show();

    window.addEventListener('keydown', onEscKeyPress);

    function onEscKeyPress(evt) {
        const ESC_KEY_CODE = 'Escape';
        if (evt.code === ESC_KEY_CODE) {
            instance.close();
            window.removeEventListener('keydown', onEscKeyPress);
        }  
    }
}
console.log(galleryItems);