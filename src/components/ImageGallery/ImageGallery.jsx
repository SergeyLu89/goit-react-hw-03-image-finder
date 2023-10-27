import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ hits, openModal }) => {
  return (
    <ul className={css.galleryList}>
      {hits.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          openModal={openModal}
          largeImageURL={largeImageURL}
          key={id}
          webformatURL={webformatURL}
          tags={tags}
        />
      ))}
    </ul>
  );
};
