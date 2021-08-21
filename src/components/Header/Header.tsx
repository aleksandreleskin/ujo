import styles from './Header.module.css';
import email_icon from '../../assets/images/email-icon.svg';
import phone_icon from '../../assets/images/phone-icon.svg';

// Import dependencies
import {Link} from 'react-router-dom';

// Import components
import ContainerFluid from '../../layout/ContainerFluid/ContainerFluid';
import {Dispatch, SetStateAction, useEffect} from 'react';
import {connect} from 'react-redux';

interface IHeader {
  setShowMenu: any;
  setIsAnimate: Dispatch<SetStateAction<boolean>>;
  isAnimate: boolean;
  isActiveButton: boolean;
  setIsActiveButton: Dispatch<SetStateAction<boolean>>;
}

const Header = ({setShowMenu, isAnimate, setIsAnimate, isActiveButton, setIsActiveButton}: IHeader) => {

  useEffect(() => {
    setTimeout(() => setIsAnimate(false), 1000);
  });

  return (
    <header className={styles.header}>
      <ContainerFluid>
        <div className={styles.header__row}>
          <div className={isAnimate ? styles.header__column_animate : styles.header__column}>
            <button className={
              isActiveButton ? styles.header__button_menu_active : styles.header__button_menu
            } onClick={() => {
              setShowMenu(true);
              setIsActiveButton(true);
            }}
            />
            <Link to="/" className={styles.header__logo}>
              <svg width="59" height="55" viewBox="0 0 58 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.8762 1H23.7926V12.5068C23.7926 14.0034 22.6951 14.7018 21.5976 14.7018C20.4336 14.7018 19.2697 13.9701 19.2697 12.5068V1H12.2192V12.5068C12.2192 15.0676 13.1504 17.2625 14.9795 19.0916C16.8087 20.9207 19.0036 21.8187 21.5644 21.8187C24.1251 21.8187 26.3201 20.9207 28.1492 19.0916C29.9783 17.2625 30.8762 15.0676 30.8762 12.5068V1Z" fill="white"/>
                <path d="M18.3265 46.2975C18.3265 51.6562 13.9824 56.0004 8.62365 56.0004L7.91714 56.0004C3.72803 56.0004 0.332075 52.6044 0.332076 48.4153L7.02956 48.4153C7.02956 49.1729 7.64371 49.7871 8.40131 49.787L10.0797 49.787C10.8017 49.787 11.387 49.2018 11.387 48.4798L11.3868 46.8825V43.7758L11.3868 40.6691L11.387 26.0635L18.3265 26.0635L18.3265 46.2975Z" fill="white"/>
                <path d="M39.952 36.4733C39.952 42.2222 35.2916 46.8826 29.5426 46.8826C23.7937 46.8826 19.1333 42.2222 19.1333 36.4733C19.1333 30.7244 23.7937 26.064 29.5426 26.064C35.2916 26.064 39.952 30.7244 39.952 36.4733ZM25.8706 36.4733C25.8706 38.5013 27.5146 40.1453 29.5426 40.1453C31.5706 40.1453 33.2147 38.5013 33.2147 36.4733C33.2147 34.4453 31.5706 32.8013 29.5426 32.8013C27.5146 32.8013 25.8706 34.4453 25.8706 36.4733Z" fill="white"/>
              </svg>
            </Link>
            <a href="mailto:support@ujo.ru" className={styles.header__email}>
              <img src={email_icon} alt=""/>
              support@ujo.ru
            </a>
            <a href="tel:650-223-6337" className={styles.header__tel}>
              <img src={phone_icon} alt=""/>
              650-223-6337
            </a>
          </div>
          <div className={isAnimate ? styles.header__column_animate : styles.header__column}>
            <Link to="/" className={styles.header__link}>Services</Link>
            <Link to="/portfolio" className={styles.header__link}>Our works</Link>
            <Link to="/company" className={styles.header__link}>Company</Link>
            <Link to="/project" className={styles.header__button_project}>Start a project</Link>
          </div>
        </div>
      </ContainerFluid>
    </header>
  );
};

export default connect(
  (state: any) => {
    const {showMenu, isAnimate, isActiveButton} = state.headerReducer;

    return {showMenu, isAnimate, isActiveButton};
  },
  dispatch => ({
    setShowMenu: () => {
      dispatch({type: 'SET_SHOW_MENU'})
    },
    setShowPopup: () => {
      dispatch({type: 'SET_SHOW_POPUP'})
    },
    setIsAnimate: () => {
      dispatch({type: 'SET_IS_ANIMATE'})
    },
    setIsActiveButton: () => {
      dispatch({type: 'SET_IS_ACTIVE_BUTTON'})
    }
  })
)(Header);
