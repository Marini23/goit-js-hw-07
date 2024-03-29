import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryList = document.querySelector(`.gallery`);
const itemsMarkup = creatItemsGalleryMarkup(galleryItems);


function creatItemsGalleryMarkup(items) {
return galleryItems.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
</li>
    `;
    }).join(` `);
}

galleryList.insertAdjacentHTML(`beforeend`, itemsMarkup);
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});