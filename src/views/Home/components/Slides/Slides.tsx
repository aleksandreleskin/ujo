import {AnimatePresence, motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import styles from '../../Home.module.css';
import cylinder from '../../../../assets/images/Cylinder-Black-Matte.png';
import ball from '../../../../assets/images/Ball-Black-Matte.png';
import cube from '../../../../assets/images/Cube-Black-Matte.png';
import cone from '../../../../assets/images/Cone-Black-Matte.png';
import cylinder1 from '../../../../assets/images/Cylinder1-Black-Matte.png';

interface IHomeMobile {
  isAnimate?: boolean;
  animate?: boolean;
}

const HomeMobile = ({isAnimate = true, animate = false}: IHomeMobile) => {
  return (
    <AnimatePresence>
      <div>
        <img src={cylinder} className={styles.home__background} alt=""/>
        <section className={styles.home__section}>
          <h1 className={styles.home__title}>
            <Link to="/services/mobile">
              <motion.span
                initial={{
                  opacity: `${!isAnimate && animate ? 0 : 1}`,
                  height: '100%'
                }}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 1.5}}
              >
                Development
              </motion.span>
            </Link><br/>
            <motion.span
              initial={{
                opacity: `${!isAnimate && animate ? 0 : 1}`,
                height: '100%'
              }}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 1.5, delay: 1}}
            > of mobile applications.
            </motion.span>
          </h1>
        </section>
      </div>
    </AnimatePresence>
  );
};

const HomeDesign = ({isAnimate, animate = false}: IHomeMobile) => {
  // const isAnimate = previewLocation?.split('/')[1] === 'services';

  return (
    <div>
      <img src={ball} className={styles.home__background} alt=""/>
      <section className={styles.home__section}>
        <h1 className={styles.home__title}>
          <Link to="/services/design">
            <motion.span
              initial={{
                opacity: `${!isAnimate && animate ? 0 : 1}`,
                height: '100%'
              }}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 1.5}}
            >Creation
            </motion.span>
          </Link><br/>

          <motion.span
            initial={{
              opacity: `${!isAnimate && animate ? 0 : 1}`,
              height: '100%'
            }}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1.5, delay: 1}}
          > of product design.
          </motion.span>
        </h1>
      </section>
    </div>
  );
};

const HomeWeb = ({isAnimate, animate = false}: IHomeMobile) => {
  // const isAnimate = previewLocation?.split('/')[1] === 'services';

  return (
    <div>
      <img src={cube} className={styles.home__background} alt=""/>
      <section className={styles.home__section}>
        <h1 className={styles.home__title}>
          <Link to="/services/web">
            <motion.span
              initial={{
                opacity: `${!isAnimate && animate ? 0 : 1}`,
                height: '100%'
              }}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 1.5}}
            >Complete
            </motion.span>
          </Link>
          <motion.span
            initial={{
              opacity: `${!isAnimate && animate ? 0 : 1}`,
              height: '100%'
            }}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1.5, delay: 1}}
          > development.
          </motion.span>
          <br/>

          <motion.span
            initial={{
              opacity: `${!isAnimate && animate ? 0 : 1}`,
              height: '100%'
            }}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1.5, delay: 1}}
          >Front End & Back End.
          </motion.span>
        </h1>
      </section>
    </div>
  );
};

const HomeOutsourcing = ({isAnimate, animate = false}: IHomeMobile) => {
  // const isAnimate = previewLocation?.split('/')[1] === 'services';

  return (
    <div>
      <img src={cone} className={styles.home__background} alt=""/>
      <section className={styles.home__section}>
        <h1 className={styles.home__title}>
          <Link to="/services/outsourcing">
            <motion.span
              initial={{
                opacity: `${!isAnimate && animate ? 0 : 1}`,
                height: '100%'
              }}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 1.5}}
            >Outsourcing
            </motion.span>
          </Link><br/>

          <motion.span
            initial={{
              opacity: `${!isAnimate && animate ? 0 : 1}`,
              height: '100%'
            }}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1.5, delay: 1}}
          >with trusted specialists.
          </motion.span>
        </h1>
      </section>
    </div>
  );
};

const HomeClients = ({isAnimate, animate = false}: IHomeMobile) => {
  // const isAnimate = previewLocation?.split('/')[1] === 'services';

  return (
    <div>
      <img src={cylinder1} className={styles.home__background} alt=""/>
      <section className={styles.home__section}>
        <h1 className={styles.home__title}>
          <Link to="/portfolio">
            <motion.span
              initial={{
                opacity: `${!isAnimate && animate ? 0 : 1}`,
                height: '100%'
              }}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 1.5}}
            >Working
            </motion.span>
          </Link><br/>

          <motion.span
            initial={{
              opacity: `${!isAnimate && animate ? 0 : 1}`,
              height: '100%'
            }}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1.5, delay: 1}}
          >with serious clients.
          </motion.span>
        </h1>
      </section>
    </div>
  );
};

export {HomeMobile, HomeDesign, HomeWeb, HomeOutsourcing, HomeClients};
