import ImageGalleryItem from '../ImageGalleryItem';
import styles from './imageGallery.module.css';

const ImageGallery = ({ images }) => (
  <ul className={styles.ImageGallery}>
    <ImageGalleryItem images={images} />
  </ul>
);

export default ImageGallery;
