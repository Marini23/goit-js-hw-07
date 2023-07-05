import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryList = document.querySelector(`.gallery`);
const itemsMarkup = creatItemsGalleryMarkup(galleryItems);
galleryList.insertAdjacentHTML(`beforeend`, itemsMarkup);

// console.log(creatItemsGalleryMarkup(galleryItems));
function creatItemsGalleryMarkup(items) {
return galleryItems.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
    <a class="gallery__link" href="large-image.jpg" onclick="event.preventDefault()">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
    </a>
</li>
    `;
    }).join(` `);
    }

galleryList.addEventListener(`click`, hanlerClickItem);

function hanlerClickItem(e) {
    if (e.target.classList.contains(`gallery__image`)) {
        console.log(`dddd`);
    }
}