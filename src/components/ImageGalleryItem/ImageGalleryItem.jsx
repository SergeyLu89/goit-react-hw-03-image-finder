import css from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  openModal,
}) => {
  return (
    <li
      className={css.galleryListItem}
      data-url={largeImageURL}
      onClick={openModal}
    >
      <img className={css.galleryItemImage} src={webformatURL} alt={tags} />
    </li>
  );
};
