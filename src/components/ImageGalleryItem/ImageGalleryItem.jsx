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
      onClick={() => {
        openModal(largeImageURL);
      }}
    >
      <img className={css.galleryItemImage} src={webformatURL} alt={tags} />
    </li>
  );
};
