import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {Dispatch, ReactNode, SetStateAction, useEffect} from 'react';
import styles from './Clients.module.css';
import {motion} from 'framer-motion';
import {useLocation} from 'react-router-dom';
import ContainerFluid from '../../layout/ContainerFluid/ContainerFluid';
import SocialLinks from '../../components/FirstScreen/components/SocialLinks/SocialLinks';
import Container from '../../layout/Container/Container';
import {Link} from 'react-router-dom';

interface ISlide {
  image_bg: string;
  image_logo: string;
  year: string;
  title: string;
  description: string;
  stack: Array<string>;
  text_logo?: string;
}

interface IClients {
  activeClient: ISlide;
  setActiveClient: Dispatch<SetStateAction<number>>;
  slides: Array<ISlide>;
  children: ReactNode;
}

const Clients = ({activeClient, setActiveClient, slides, children}: IClients) => {
  const location = useLocation();
  const locationSplit = location.pathname.split('/');
  const slideId: number = Number(locationSplit[locationSplit.length - 1]);

  useEffect(() => {
    setActiveClient(slideId - 1);
  }, [setActiveClient, slideId]);

  const handleClick = () => {
    document.body.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.clients}>
      <div
        className={styles.clients__firstScreen}
        style={{
          backgroundImage: `url(${activeClient?.image_bg})`
        }}
      >
        <Header/>
        <div>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1.5}}
          >
            <div className={styles.clients__filter}/>
          </motion.div>
          <ContainerFluid style={{height: '100%'}}>
            <div style={{position: 'relative', height: '100%'}}>
              <SocialLinks/>
              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 1.5}}
              >
                <div className={styles.clients__info}>
                  <span className={styles.clients__year}>{activeClient?.year}</span>
                  {
                    activeClient?.text_logo &&
                    <h2 className={styles.clients__textLogo}>{activeClient?.text_logo}</h2>
                  }
                  {
                    activeClient?.image_logo &&
                    <img className={styles.clients__logo} src={activeClient?.image_logo} alt=""/>
                  }
                  <span className={styles.clients__description}>{activeClient?.description}</span>
                </div>
                <div className={styles.clients__stack}>
                  {activeClient?.stack.map((item, i) => <span key={i}>{item}</span>)}
                </div>
              </motion.div>
            </div>
          </ContainerFluid>
        </div>
        <div className={styles.clients__line}/>
      </div>
      <div>
        <Container>
          {children}
          <div className={styles.clients__link}>
            {
              slides[slideId]
                ?
                <Link
                  to={`/portfolio/project/${slideId + 1}`}
                  onClick={handleClick}
                >
                  <img src={slides[slideId]?.image_bg} alt=""/>
                  <div className={styles.clients__slide_about}>
                    <span className={styles.clients__year_next}>{slides[slideId]?.year}</span>
                    <span className={styles.clients__textLogo_next}>{slides[slideId]?.title}</span>
                  </div>
                  <span className={styles.clients__link_next}>Watch the project</span>
                </Link>
                :
                <Link
                  to={`/portfolio/project/${1}`}
                  onClick={handleClick}
                >
                  <img src={slides[0]?.image_bg} alt=""/>
                  <div className={styles.clients__slide_about}>
                    <span className={styles.clients__year_next}>{slides[0]?.year}</span>
                    <span className={styles.clients__textLogo_next}>{slides[0]?.title}</span>
                  </div>
                  <span className={styles.clients__link_next}>Watch the project</span>
                </Link>
            }
          </div>
        </Container>
      </div>
      <Footer email="support@ujo.ru"/>
    </div>
  );
};

export default Clients;

