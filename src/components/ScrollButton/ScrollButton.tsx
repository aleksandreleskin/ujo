import top_arrow from '../../assets/images/top_arrow.svg';
import styles from './ScrollButton.module.css';
import {useState} from 'react';

const ScrollButton = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);

  const handleClick = () => {
    document.body.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  document.addEventListener('scroll', () => {
    setScrollY(window.scrollY);
    setInnerHeight(window.innerHeight);
  });

  return (
    <button
      className={styles.scrollButton}
      onClick={handleClick}
      style={{
        opacity: scrollY > innerHeight ? 1 : 0,
        zIndex: scrollY > innerHeight ? 999 : 0,
      }}
    >
      <img src={top_arrow} alt=""/>
    </button>
  );
};

export default ScrollButton;
