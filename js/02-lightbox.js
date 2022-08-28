import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryCard = document.querySelector('.gallery');
const cardsMarkup = createCardsMarkup(galleryItems);

galleryCard.insertAdjacentHTML('beforeend', cardsMarkup);

function createCardsMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
        </a>
        `;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
    overlayOpacity: 0.9,
    captionsData: 'alt',
    captionDelay: 250,
    animationSpeed: 250,
    disableRightClick: true,
    alertError: false,
    doubleTapZoom: 2,
    maxZoom: 5,
});
console.log(galleryItems);