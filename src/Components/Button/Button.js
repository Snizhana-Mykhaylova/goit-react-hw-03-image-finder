import styles from './button.module.css';

const Button = ({ onClick }) => (
  <button onClick={onClick} className={styles.Button} type="button">
    Load more
  </button>
);

// window.scrollTo({
//     top: document.documentElement.scrollHeight,
//     behavior: 'smooth',
// });

export default Button;
