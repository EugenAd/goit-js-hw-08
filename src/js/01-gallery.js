// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Descris în documentație
import SimpleLightbox from 'simplelightbox';
// Import suplimentar de stil
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
const createGalleryItems = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<li class="gallery__item">
       <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" data-src="${original}" alt="${description}"/>
       </a>
      </li> `
  )
  .join('');
galleryList.insertAdjacentHTML('afterbegin', createGalleryItems);
const galleryHandler = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
galleryHandler.on('show.SimpleLightbox');

console.log(galleryItems);
