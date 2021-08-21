import Header from '../Header/Header';
import React, {ReactNode, useState} from 'react';
import styles from './FirstScreen.module.css';
import ContainerFluid from '../../layout/ContainerFluid/ContainerFluid';
import Footer from '../Footer/Footer';
import {Link, useHistory, useLocation} from 'react-router-dom';
import {useSwipeable} from 'react-swipeable';
import mouse_icon from '../../assets/images/mouse.svg';
import horizontal_arrows from '../../assets/images/horizontal_arrows.svg';
import SocialLinks from './components/SocialLinks/SocialLinks';

interface IFirstScreen {
  children: ReactNode;
  notScrollable?: boolean;
}

const FirstScreen = ({children, notScrollable}: IFirstScreen) => {
  const location = useLocation();
  const history = useHistory();

  const [prevRedirect, setPrevRedirect] = useState(false);

  const goToPrevPage = () => {
    const index = routes.indexOf(location.pathname);
    if (routes[index - 1]) {
      setPrevRedirect(true);
      setTimeout(() => {
        history.push(routes[index - 1]);
        setPrevRedirect(false);
      }, 400);
    }
  };

  const goToNextPage = () => {
    const index = routes.indexOf(location.pathname);
    if (routes[index + 1]) {
      setPrevRedirect(true);
      setTimeout(() => {
        history.push(routes[index + 1]);
        setPrevRedirect(false);
      }, 400);
    } else {
      setPrevRedirect(true);
      setTimeout(() => {
        history.push(routes[0]);
        setPrevRedirect(false);
      }, 400);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (scrollable && !notScrollable) {
        setScrollable(false);
        setTimeout(() => {
          setScrollable(true);
        }, 700);
        goToNextPage();
      }
    },
    onSwipedRight: () => {
      if (scrollable && !notScrollable) {
        setScrollable(false);
        setTimeout(() => {
          setScrollable(true);
        }, 700);
        goToPrevPage();
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const routes: Array<string> = [
    '/mobile', '/design', '/web', '/outsourcing', '/clients'
  ];

  const linksList = routes.map((link, i) => (
    <li key={i} className={location.pathname === link ? styles.list__item_active : ''}>
      <Link
        to={link}
        onClick={(event) => {
          event.preventDefault();
          setPrevRedirect(true);
          setTimeout(() => {
            history.push(link);
            setPrevRedirect(false);
          }, 400);
        }}
      >{i < 9 ? `0${i + 1}` : i + 1}</Link>
    </li>
  ));

  const [scrollable, setScrollable] = useState(true);

  const scrollHandle = (event: React.WheelEvent<HTMLDivElement>) => {
    if (scrollable && !notScrollable) {
      setScrollable(false);
      if (event.deltaY > 0) {
        goToNextPage();
      } else if (event.deltaY < 0) {
        goToPrevPage();
      }
      setTimeout(() => {
        setScrollable(true);
      }, 700);
    }
  };

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
            <div style={{opacity: prevRedirect ? 0 : 1, transition: '0.4s ease-in-out'}}>{children}</div>
            <ul
              className={styles.slider__slides}
              style={{
                opacity: location.pathname.split('/')[1] === 'services' ? 1 : 0,
                zIndex: location.pathname.split('/')[1] === 'services' ? 0 : -1,
              }}
            >
              <li>
                <Link
                  className={location.pathname === '/services/mobile' ? styles.slider__slides_active : ''}
                  to="/services/mobile"
                >
                  Service 1
                </Link>
              </li>
              <li>
                <Link
                  className={location.pathname === '/services/design' ? styles.slider__slides_active : ''}
                  to="/services/design"
                >
                  Service 2
                </Link>
              </li>
              <li>
                <Link
                  className={location.pathname === '/services/web' ? styles.slider__slides_active : ''}
                  to="/services/web"
                >
                  Service 3
                </Link>
              </li>
              <li>
                <Link
                  className={location.pathname === '/services/outsourcing' ? styles.slider__slides_active : ''}
                  to="/services/outsourcing"
                >
                  Service 4
                </Link>
              </li>
            </ul>
            <button
              style={{zIndex: Number(`${notScrollable ? -1 : 0}`)}}
              className={styles.slider__scroll}
              onClick={() => {
                if (!notScrollable) {
                  const index = routes.indexOf(location.pathname);
                  if (routes[index + 1]) {
                    setPrevRedirect(true);
                    setTimeout(() => {
                      history.push(routes[index + 1]);
                      setPrevRedirect(false);
                    }, 400);
                  }
                }
              }}>
              <img src={mouse_icon} alt=""/>
            </button>
            <button
              style={{zIndex: Number(`${notScrollable ? -1 : 0}`)}}
              className={styles.slider__scroll__horizontal} {...handlers}>
              <img src={horizontal_arrows} alt=""/>
            </button>
          </div>
        </ContainerFluid>
      </div>
      <Footer
        style={{zIndex: Number(`${notScrollable ? -1 : 0}`), flex: '0 0 auto'}}
        language="eng"
      >
        <ul className={styles.slider__control}>
          {linksList}
        </ul>
      </Footer>
    </div>
  );
};

export default FirstScreen;
