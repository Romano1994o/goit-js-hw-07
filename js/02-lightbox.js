import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const imagesEl = galleryItems
  .map(
    item =>
      `<li>
      <a class="gallery__item" 
      href="${item.original}">
          <img 
          class="gallery__image" 
          src="${item.preview}" 
          alt="${item.description}" />
        </a>
        </li>`
  )
  .join('');

galleryEl.insertAdjacentHTML('afterbegin', imagesEl);
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

