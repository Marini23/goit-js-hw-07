import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryList = document.querySelector(`.gallery`);
const itemsMarkup = creatItemsGalleryMarkup(galleryItems);


function creatItemsGalleryMarkup(items) {
return galleryItems.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
    <a class="gallery__link" href="large-image.jpg" >
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

galleryList.insertAdjacentHTML(`beforeend`, itemsMarkup);
galleryList.addEventListener(`click`, hanlerClickItem);


function hanlerClickItem(e) {
    e.preventDefault();

    if (e.target === galleryList) {
    return;
    }
    const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600">`,
        {
        
    onShow: () => {
        window.addEventListener(`keydown`, onEsc);     
    },

    onClose: () => {
        window.removeEventListener(`keydown`, onEsc);
    },
    });
    instance.show();

    function onEsc(e) {
        if (e.code === `Escape`) {
        instance.close();
    }
    };
    
}

