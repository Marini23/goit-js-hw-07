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
// console.log(creatItemsGalleryMarkup(galleryItems));
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
    


    // const isItem = e.target.closest(`.gallery__item`);
    // console.log(isItem);
    
    // if (e.target.classList.contains(`gallery__image`)) {
    //     const { source } = isItem.dataset;
    //     console.log(source);
    //     // const obj = findImage(item);
    // }
}

// function findImage(item) {
//     const { source } = item.dataset;
//         console.log(source);
// }

