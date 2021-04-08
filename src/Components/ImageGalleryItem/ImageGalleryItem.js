import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ images }) =>
  images.map(({ id, webformatURL, tags }) => (
    <li key={id} className={styles.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  ));

export default ImageGalleryItem;
