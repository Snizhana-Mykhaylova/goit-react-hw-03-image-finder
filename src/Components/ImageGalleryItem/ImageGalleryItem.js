import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ images }) =>
  images.map(({ id, webformatURL, tags, largeImageURL }) => (
    <li key={id} className={styles.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={styles.ImageGalleryItemImage}
        data-url={largeImageURL}
      />
    </li>
  ));

export default ImageGalleryItem;
