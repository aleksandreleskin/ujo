import Header from '../../../../components/Header/Header';
import React, {Dispatch, ReactNode, Ref, SetStateAction, useEffect, useRef, useState} from 'react';
import styles from './FirstScreen.module.css';
import ContainerFluid from '../../../../layout/ContainerFluid/ContainerFluid';
import Footer from '../../../../components/Footer/Footer';
import {Link, useHistory, useLocation} from 'react-router-dom';
import {useSwipeable} from 'react-swipeable';
import mouse_icon from '../../../../assets/images/mouse.svg';
import horizontal_arrows from '../../../../assets/images/horizontal_arrows.svg';
import SocialLinks from '../../../../components/FirstScreen/components/SocialLinks/SocialLinks';
import slides_styles from '../Slides/Slides.module.css';

interface ISlide {
  image_bg: string;
  image_logo: string;
  year: string;
  title: string;
}

interface IFirstScreen {
  children: ReactNode;
  notScrollable?: boolean;
  setActiveSlide: Dispatch<SetStateAction<number>>;
  slides: Array<ISlide>;
}

const FirstScreen = ({children, notScrollable, slides, setActiveSlide}: IFirstScreen) => {
  const location = useLocation();
  const history = useHistory();

  const routes: Array<string> = slides.map((slide, i) => `/portfolio/${i + 1}`);

  const linksList = slides.map((slide, i) => (
    <li
      key={i}
      className={location.pathname === `/portfolio/${i + 1}` ? styles.list__item_active : ''}
    >
      <Link to={`/portfolio/${i + 1}`}>{i < 9 ? `0${i + 1}` : i + 1}</Link>
    </li>
  ));

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (scrollable && !notScrollable) {
        setScrollable(false);
        setTimeout(() => {
          setScrollable(true);
        }, 700);
        const index = routes.indexOf(location.pathname);
        routes[index + 1] && history.push(routes[index + 1]);
      }
    },
    onSwipedRight: () => {
      if (scrollable && !notScrollable) {
        setScrollable(false);
        setTimeout(() => {
          setScrollable(true);
        }, 700);
        const index = routes.indexOf(location.pathname);
        routes[index - 1] && history.push(routes[index - 1]);
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    trackTouch: true,
  });

  const [scrollable, setScrollable] = useState(true);

  const scrollHandle = (event: React.WheelEvent<HTMLDivElement>) => {
    if (scrollable && !notScrollable) {
      setScrollable(false);
      const index = routes.indexOf(location.pathname);
      if (event.deltaY > 0) {
        routes[index + 1] && history.push(routes[index + 1]);
      } else if (event.deltaY < 0) {
        routes[index - 1] && history.push(routes[index - 1]);
      }
      setTimeout(() => {
        setScrollable(true);
      }, 700);
    }
  };

  const refSlidesMenu: Ref<HTMLUListElement> = useRef(null);

  useEffect(() => {
    if (refSlidesMenu.current) {
      routes.indexOf(history.location.pathname) === -1 && history.push(routes[0]);
      const activeElement = routes.indexOf(history.location.pathname);
      refSlidesMenu.current.scrollLeft = 105 * activeElement;
      setActiveSlide(activeElement);
    }
  }, [history, history.location.pathname, refSlidesMenu, routes, setActiveSlide]);

  return (
    <div className={styles.firstScreen}>
      <Header/>
      <div className={styles.slider}>
        <ContainerFluid style={{height: '100%'}}>
          <div
            className={styles.slider__wrapper}
            {...handlers}
            onWheel={(event) => scrollHandle(event)}
          >
            <SocialLinks/>
            {children}
            <div className={styles.slider__buttons}>
              <Link
                to="#"
                className={slides_styles.slide__back}
                onClick={() => {
                  const index = routes.indexOf(location.pathname);
                  routes[index - 1] && history.push(routes[index - 1]);
                }}
              >Back</Link>
              <button
                style={{zIndex: Number(`${notScrollable ? -1 : 0}`)}}
                className={styles.slider__scroll}
                onClick={() => {
                  if (!notScrollable) {
                    const index = routes.indexOf(location.pathname);
                    routes[index + 1] && history.push(routes[index + 1]);
                  }
                }}>
                <img src={mouse_icon} alt=""/>
              </button>
              <button
                style={{zIndex: Number(`${notScrollable ? -1 : 0}`)}}
                className={styles.slider__scroll__horizontal} {...handlers}
              >
                <img src={horizontal_arrows} alt=""/>
              </button>
            </div>
          </div>
        </ContainerFluid>
      </div>
      <Footer
        style={{zIndex: Number(`${notScrollable ? -1 : 0}`), flex: '0 0 auto'}}
        email="support@ujo.ru"
      >
        <ul className={styles.slider__control} ref={refSlidesMenu}>
          {linksList}
        </ul>
      </Footer>
    </div>
  );
};

export default FirstScreen;
