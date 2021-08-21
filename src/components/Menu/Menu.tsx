import styles from './Menu.module.css';
import {Link} from 'react-router-dom';

import {Dispatch, SetStateAction, useState} from 'react';
import {connect} from 'react-redux';

interface IMenu {
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  setIsActiveButton: Dispatch<SetStateAction<boolean>>;
  showMenu: boolean;
}

const Menu = ({showMenu, setShowMenu, setIsActiveButton}: IMenu) => {
  const [isHover, setIsHover] = useState(false);

  const mouseOverHandle = () => {
    setIsHover(true);
  };

  const mouseLeaveHandle = () => {
    setIsHover(false);
  };

  return (
    <div className={styles.menu} style={{top: `${showMenu ? '0' : '-100vh'}`}}>
      <div className={styles.menu__container}>
        <div className={styles.menu__row}>
          <div className={styles.menu__column}>
            <ul className={styles.menu__links}>
              <li className={styles.menu__link}>
                <Link
                  onClick={() => {
                    setShowMenu(false);
                    setIsActiveButton(false);
                  }}
                  onMouseOver={mouseOverHandle}
                  onMouseLeave={mouseLeaveHandle}
                  className={isHover ? styles.menu__link_unhover : ''}
                  to="/"
                >Services</Link></li>
              <li className={styles.menu__link}>
                <Link
                  onClick={() => {
                    setShowMenu(false);
                    setIsActiveButton(false);
                  }}
                  onMouseOver={mouseOverHandle}
                  onMouseLeave={mouseLeaveHandle}
                  className={isHover ? styles.menu__link_unhover : ''}
                  to="/portfolio"
                >Portfolio</Link></li>
              <li className={styles.menu__link}>
                <Link
                  onClick={() => {
                    setShowMenu(false);
                    setIsActiveButton(false);
                  }}
                  onMouseOver={mouseOverHandle}
                  onMouseLeave={mouseLeaveHandle}
                  className={isHover ? styles.menu__link_unhover : ''}
                  to="/company"
                >Company</Link></li>
              <li className={styles.menu__link}>
                <Link
                  onClick={() => {
                    setShowMenu(false);
                    setIsActiveButton(false);
                  }}
                  onMouseOver={mouseOverHandle}
                  onMouseLeave={mouseLeaveHandle}
                  className={isHover ? styles.menu__link_unhover : ''}
                  to="/contact"
                >Contact</Link></li>
            </ul>
          </div>
          <div className={styles.menu__column}>
            <div className={styles.menu__contacts}>
              <a href="mailto:support@ujo.ru">support@ujo.ru</a>
              <a href="tel:650-223-6337">650-223-6337</a>
            </div>
            <Link
              to="/project"
              className={styles.menu__button_proposal}
              onClick={() => {
                setShowMenu(false);
                setIsActiveButton(false);
              }}
            >
              Write to us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  (state: any) => {
    const {showMenu} = state.headerReducer;

    return {showMenu};
  },
  dispatch => ({
    setShowMenu: () => {
      dispatch({type: 'SET_SHOW_MENU'});
    },
    setIsActiveButton: () => {
      dispatch({type: 'SET_IS_ACTIVE_BUTTON'});
    }
  })
)(Menu);
