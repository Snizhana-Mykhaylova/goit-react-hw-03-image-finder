import ImageGalleryItem from '../ImageGalleryItem';
import styles from './imageGallery.module.css';

const ImageGallery = ({ images, onClick }) => (
  <ul className={styles.ImageGallery} onClick={onClick}>
    <ImageGalleryItem images={images} />
  </ul>
);

export default ImageGallery;
