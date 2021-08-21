import React, {Dispatch, ReactNode, SetStateAction, useState} from 'react';
import styles from './Service.module.css';
import {Link, useHistory, useLocation} from 'react-router-dom';
import ProposalForm from '../../components/ProposalForm/ProposalForm';
import Footer from '../../components/Footer/Footer';
import Container from '../../layout/Container/Container';

interface IService {
  children: ReactNode;
  content?: ReactNode;
  setIsAnimate: Dispatch<SetStateAction<boolean>>;
}

const Service = ({
                   children,
                   content,
                   setIsAnimate
                 }: IService) => {
  const [onLeave, setOnLeave] = useState(false);

  const history = useHistory();
  const location = useLocation();

  const urlSplit = location.pathname.split('/');
  const previewPage = `/${urlSplit[urlSplit.length - 1]}`;

  const handleLeavePage = (event: any) => {
    event.preventDefault();
    setOnLeave(true);
    setIsAnimate(true);
    setTimeout(() => history.push(`${previewPage}`), 1000);
  };

  return (
    <div className={styles.service}>
      <div className={!onLeave ? styles.service__header : styles.service__header_leave}>
        {children}
        <Link to={{pathname: previewPage}} onClick={handleLeavePage} className={styles.service__back}>
          Back
        </Link>
      </div>
      <div className={styles.service__wrapper}>
        {content}
      </div>
      <div className={styles.service__form}>
        <ProposalForm/>
      </div>
      <div className={styles.service__pages}>
        <Container>
          <h2>Other services</h2>
          <ul>
            <li
              className={
                location.pathname === ('/services/mobile' || '/services/mobile/')
                  ? styles.link__active
                  : ''
              }
            >
              <Link
                to="/services/mobile"
                onClick={() => window.scrollTo(0,0)}
              >
                Development of mobile applications.
              </Link>
            </li>
            <li
              className={
                location.pathname === ('/services/design' || '/services/design/')
                  ? styles.link__active
                  : ''
              }
            >
              <Link
                to="/services/design"
                onClick={() => window.scrollTo(0,0)}
              >
                Creation of product design
              </Link>
            </li>
            <li
              className={
                location.pathname === ('/services/web' || '/services/web/')
                  ? styles.link__active
                  : ''
              }
            >
              <Link
                to="/services/web"
                onClick={() => window.scrollTo(0,0)}
              >
                Complete development. Front End & Back End.
              </Link>
            </li>
            <li
              className={
                location.pathname === ('/services/outsourcing' || '/services/outsourcing/')
                  ? styles.link__active
                  : ''
              }
            >
              <Link
                to="/services/outsourcing"
                onClick={() => window.scrollTo(0,0)}
              >
                Outsourcing with trusted specialists.
              </Link>
            </li>
          </ul>
        </Container>
      </div>
      <div className={styles.service__footer}>
        <Footer email="support@ujo.ru"/>
      </div>
    </div>
  );
};

export default Service;
