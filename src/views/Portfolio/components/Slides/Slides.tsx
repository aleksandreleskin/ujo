import {motion} from 'framer-motion';
import styles from '../../../Home/Home.module.css';
import ball from '../../../../assets/images/Ball-Black-Matte.png';
import slides_styles from './Slides.module.css';
import {Link, useHistory} from 'react-router-dom';

import {Dispatch, SetStateAction, useRef, useState} from 'react';

interface ISlide {
  image_bg: string;
  image_logo: string;
  year: string;
  title: string;
}

interface IHomeMobile {
  activeSlide: number;
  setActiveClient: Dispatch<SetStateAction<number>>;
  slides: Array<ISlide>;
  setActiveBackground: Dispatch<SetStateAction<boolean>>
}

const Slides = ({activeSlide, setActiveClient, slides, setActiveBackground}: IHomeMobile) => {
  const history = useHistory();

  const handleClickLink = (event: any, active: number, url: string) => {
    event.preventDefault();
    setActiveClient(active);
    setActiveBackground(true);
    setTimeout(() => {
      history.push(url);
      setActiveClient(-1);
    }, 500);
  };

  const [matrix, setMatrix] = useState('1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1');

  const activeSlideRef: any = useRef(null);
  const handleMouseMove = (event: any) => {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;

    if (width / 2 > event.clientX && height / 2 > event.clientY) {
      setMatrix('1, 0, 0, -0.0001, 0, 1, 0, -0.0001, 0, 0, 1, 0, 0, 0, 0, 1');
    }
    if (width / 2 < event.clientX && height / 2 > event.clientY) {
      setMatrix('1, 0, 0, 0.0001, 0, 1, 0, -0.0001, 0, 0, 1, 0, 0, 0, 0, 1');
    }
    if (width / 2 > event.clientX && height / 2 < event.clientY) {
      setMatrix('1, 0, 0, -0.0001, 0, 1, 0, 0.0001, 0, 0, 1, 0, 0, 0, 0, 1');
    }
    if (width / 2 < event.clientX && height / 2 < event.clientY) {
      setMatrix('1, 0, 0, 0.0001, 0, 1, 0, 0.0001, 0, 0, 1, 0, 0, 0, 0, 1');
    }
  };

  const slidesList = slides.map((slide, i) => (
    <div
      className={activeSlide === i ? slides_styles.slide_active : slides_styles.slide}
      key={i}
      style={{
        marginLeft: activeSlide < i ? '-40%' : '',
        marginRight: activeSlide > i ? '-40%' : '',
        opacity: activeSlide > i ? '0' : '1',
        transform: `translateX(${-60 * activeSlide}%)`,
      }}
      onMouseMove={handleMouseMove}
      ref={activeSlideRef}
      onMouseLeave={() => setMatrix('1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1')}
    >
      <Link
        to={`/portfolio/project/${i + 1}`}
        className={slides_styles.slide__link}
        onClick={(event) => handleClickLink(event, i, `/portfolio/project/${i + 1}`)}
      >Watch the project</Link>
      <div className={slides_styles.slide__image} style={{
        transform: activeSlide === i ? `translateX(-50%) translateY(-50%) matrix3d(${matrix})` : 'translateX(-50%) translateY(-50%)',
      }}>
        <Link
          to={`/portfolio/project/${i + 1}`}
          style={{position: 'relative', height: '100%', display: 'block'}}
          onClick={(event) => handleClickLink(event, i, `/portfolio/project/${i + 1}`)}
        >
          {
            slide.image_logo &&
            <img
              src={slide.image_logo}
              alt=""
              className={slides_styles.slide__logo}
            />
          }
          <img
            src={slide.image_bg}
            className={slides_styles.slide__bg}
            alt=""
          />
          <div className={slides_styles.slide__info}>
            <span>{slide.year}</span>
            <span>{slide.title}</span>
          </div>
        </Link>
      </div>
    </div>
  ));

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 1.5}}
      style={{width: '100%', height: '100%'}}
    >
      <img src={ball} className={styles.home__background} alt=""/>
      <section className={styles.home__section}>
        <div className={slides_styles.slides}>
          {slidesList}
        </div>
      </section>
    </motion.div>
  );
};

export default Slides;
