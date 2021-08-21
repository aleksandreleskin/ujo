import ContainerFluid from '../../layout/ContainerFluid/ContainerFluid';
import styles from './Footer.module.css';
import {CSSProperties, Dispatch, ReactNode, SetStateAction, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

interface IFooter {
  children?: ReactNode;
  style?: CSSProperties;
  email?: string;
  language?: string;
  isAnimate: boolean;
  setIsAnimate: Dispatch<SetStateAction<boolean>>;
}

const Footer = ({children, style, email, language, isAnimate, setIsAnimate}: IFooter) => {
  useEffect(() => {
    setTimeout(() => setIsAnimate(false), 1000);
  });

  return (
    <footer className={
      children
        ? (isAnimate ? styles.footer_content_animate : styles.footer_content)
        : (isAnimate ? styles.footer_animate : styles.footer)
    } style={style}>
      <ContainerFluid>
        <div className={styles.footer__row}>
          {language && <Link to="#" className={styles.footer__lang}>{language}</Link>}
          {email && <a href={`mailto:${email}`} className={styles.footer__email}>{email}</a>}
          {children}
          <span className={styles.footer__copyright}>© 2016-2021 UJO</span>
        </div>
      </ContainerFluid>
    </footer>
  );
};


export default connect(
  (state: any) => {
    const {isAnimate} = state.footerReducer;

    return {isAnimate};
  },
  dispatch => ({
    setShowMenu: () => {
      dispatch({type: 'SET_SHOW_MENU'})
    },
    setIsAnimate: () => {
      dispatch({type: 'SET_IS_ANIMATE'})
    },
  })
)(Footer);
