import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector(`.gallery`);
const itemsMarkup = creatItemsGalleryMarkup(galleryItems);


function creatItemsGalleryMarkup(items) {
return galleryItems.map(({ preview, description }) => {
    return `
    <li class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
</li>
    `;
    }).join(` `);
}

galleryList.insertAdjacentHTML(`beforeend`, itemsMarkup);
// galleryList.addEventListener(`click`, hanlerClickItem);
// console.log(creatItemsGalleryMarkup(items));

let galleryAll = new SimpleLightbox('.gallery a');
console.log(galleryAll);
// (function() {
//         let gallery = new SimpleLightbox('.gallery a', {captionsData: `alt`, captiondelay: 250,});
//     })();