import Header from '../../components/Header/Header';
import {motion} from 'framer-motion';
import React, {ReactNode} from 'react';
import Footer from '../../components/Footer/Footer';
import ContainerFluid from '../../layout/ContainerFluid/ContainerFluid';
import SocialLinks from '../../components/FirstScreen/components/SocialLinks/SocialLinks';
import styles from './Project.module.css';

const Project = ({children}: { children: ReactNode }) => {
  return (
    <div className={styles.project}>
      <Header/>
      <ContainerFluid style={{height: '100%'}}>
        <div style={{position: 'relative', height: '100%'}}>
          <SocialLinks/>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1.5}}
            style={{height: '100%'}}
          >
            {children}
          </motion.div>
        </div>
      </ContainerFluid>
      <Footer email="support@ujo.ru"/>
    </div>
  );
};

export default Project;
