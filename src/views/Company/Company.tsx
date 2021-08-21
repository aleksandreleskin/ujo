import Header from '../../components/Header/Header';
import React, {useEffect, useRef, useState} from 'react';
import ContainerFluid from '../../layout/ContainerFluid/ContainerFluid';
import SocialLinks from '../../components/FirstScreen/components/SocialLinks/SocialLinks';
import styles from './Company.module.css';
import mouse_icon from '../../assets/images/mouse.svg';
import Container from '../../layout/Container/Container';

// Import images
import client_1 from '../../assets/images/companies/client-1.png';
import client_2 from '../../assets/images/companies/client-2.png';
import client_3 from '../../assets/images/companies/client-3.png';
import client_4 from '../../assets/images/companies/client-4.png';
import client_5 from '../../assets/images/companies/client-5.png';
import client_6 from '../../assets/images/companies/client-6.png';
import client_7 from '../../assets/images/companies/client-7.png';
import client_8 from '../../assets/images/companies/client-8.png';
import client_9 from '../../assets/images/companies/client-9.png';
import client_10 from '../../assets/images/companies/client-10.png';
import client_11 from '../../assets/images/companies/client-11.png';
import client_12 from '../../assets/images/companies/client-12.svg';
import employee1 from '../../assets/images/employee-1.png';
import employee2 from '../../assets/images/employee-2.png';
import Footer from '../../components/Footer/Footer';
import {motion} from 'framer-motion';
import FadeInWhenVisible from '../../components/FadeInWhenVisible/FadeInWhenVisible';
import {useInView} from 'react-intersection-observer';

const Company = () => {
  const [ref, inView] = useInView();
  const [rateShow, setRateShow] = useState(true);

  const [years, setYears] = useState(0);
  const getYears = (years: number) => {
    let count = 0;
    setInterval(() => {
      if (count > years) {
        return false;
      }
      setYears(count);
      count++;
    }, 15);
  };

  const [projects, setProjects] = useState(0);
  const getProjects = (projects: number) => {
    let count = 0;
    setInterval(() => {
      if (count > projects) {
        return false;
      }
      setProjects(count);
      count++;
    }, 15);
  };

  const [employees, setEmployees] = useState(0);
  const getEmployees = (employees: number) => {
    let count = 0;
    setInterval(() => {
      if (count > employees) {
        return false;
      }
      setEmployees(count);
      count++;
    }, 15);
  };

  const clientsList: any = useRef(null);

  const [clients, setClients] = useState([
    client_1,
    client_2,
    client_3,
    client_4,
    client_5,
    client_6,
    client_7,
    client_8,
    client_9,
    client_10,
    client_11,
    client_12
  ]);

  useEffect(() => {
    if (inView) {
      if (rateShow) {
        getYears(7);
        getProjects(86);
        getEmployees(25);
        setRateShow(false);
      }
    }
  }, [inView, rateShow]);

  const [translateX, setTranslateX] = useState(0);
  const [blockWidth, setBlockWidth] = useState(window.innerWidth);

  useEffect(() => {
    setBlockWidth(window.innerWidth);

    let count = 0;
    setInterval(() => {
      count = count - 1;
      setTranslateX(count);
    }, 10);

    window.addEventListener('resize', () => {
      setBlockWidth(window.innerWidth);
    });

    let activeClient = 0;
    setInterval(() => {
      clients.push(clients[activeClient]);
      setClients(clients);
      activeClient++;
    }, blockWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.company}>
      <div className={styles.company__firstScreen}>
        <Header/>
        <ContainerFluid style={{height: '100%'}}>
          <div className={styles.company__banner}>
            <SocialLinks/>
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 1.5}}
              style={{marginTop: '-80px'}}
            >
              <span>Who are we?</span>
              <h1>Company<br/>short description</h1>
            </motion.div>
          </div>
          <a className={styles.company__scroll} href={'#company'}>
            <img src={mouse_icon} alt=""/>
          </a>
        </ContainerFluid>
        <Footer style={{opacity: 0, zIndex: -1, visibility: 'hidden'}}/>
      </div>
      <div className={styles.company__content} id="company">
        <Container>
          <FadeInWhenVisible>
            <h2>UJO</h2>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <p>UJO is a team. These are people who really enjoy what they do. This
              professionals who are constantly learning new things, catching trends, looking for new solutions and are not afraid of difficulties.
              This
              programmers, marketers, analysts, managers. We are an IT team with which it is easy for you to go to success.</p>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div className={styles.company__mission}>
              <span>the company's mission</span>
              <h3>Make a high-quality IT product available</h3>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <p>We make a high-quality, modern IT product affordable for a wide range of customers. Each
              the business should be able to develop through the introduction of IT solutions. Your investment should pay off
              many times, this is the main meaning of working with us.</p>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div className={styles.company__facts}>
              <h3>A few facts about us</h3>
              <div ref={ref}>
                <div className={styles.company__fact}>
                  <i>{years}</i>
                  <span>Years of work</span>
                </div>
                <div className={styles.company__fact}>
                  <i>{projects}</i>
                  <span>Projects</span>
                </div>
                <div className={styles.company__fact}>
                  <i>{employees}</i>
                  <span>Employees</span>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        </Container>
      </div>
      <div className={styles.company__clients}>
        <Container>
          <FadeInWhenVisible>
            <div className={styles.company__header}>
              <h3>Clients</h3>
              <p>UJO develops complex web and mobile products. We believe in data-driven design,
                analytics and usability.</p>
            </div>
          </FadeInWhenVisible>
        </Container>
        <FadeInWhenVisible>
          <ContainerFluid style={{padding: '0px'}}>
            <div className={styles.company__clientsList}>
              <div ref={clientsList} style={{marginLeft: `${translateX}px`}}>
                {clients.map((client, i) => <img src={client} key={i} alt=""/>)}
              </div>
            </div>
          </ContainerFluid>
        </FadeInWhenVisible>
      </div>
      <div className={styles.company__team}>
        <Container>
          <FadeInWhenVisible>
            <h3>Out team</h3>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div className={styles.company__employees}>
              <div className={styles.company__employee}>
                <img src={employee1} alt=""/>
                <div>
                  <span>Bertram Gilfoyle</span>
                  <i>Full stack designer</i>
                </div>
              </div>
              <div className={styles.company__employee}>
                <img src={employee2} alt=""/>
                <div>
                  <span>Dinesh Chugtai</span>
                  <i>Full stack designer</i>
                </div>
              </div>
              <div className={styles.company__employee}>
                <img src={employee1} alt=""/>
                <div>
                  <span>Bertram Gilfoyle</span>
                  <i>Full stack designer</i>
                </div>
              </div>
              <div className={styles.company__employee}>
                <img src={employee2} alt=""/>
                <div>
                  <span>Dinesh Chugtai</span>
                  <i>Full stack designer</i>
                </div>
              </div>
              <div className={styles.company__employee}>
                <img src={employee1} alt=""/>
                <div>
                  <span>Bertram Gilfoyle</span>
                  <i>Full stack designer</i>
                </div>
              </div>
              <div className={styles.company__employee}>
                <img src={employee2} alt=""/>
                <div>
                  <span>Dinesh Chugtai</span>
                  <i>Full stack designer</i>
                </div>
              </div>
              <div className={styles.company__employee}>
                <img src={employee1} alt=""/>
                <div>
                  <span>Bertram Gilfoyle</span>
                  <i>Full stack designer</i>
                </div>
              </div>
              <div className={styles.company__employee}>
                <img src={employee2} alt=""/>
                <div>
                  <span>Dinesh Chugtai</span>
                  <i>Full stack designer</i>
                </div>
              </div>
              <div className={styles.company__employee}>
                <img src={employee1} alt=""/>
                <div>
                  <span>Bertram Gilfoyle</span>
                  <i>Full stack designer</i>
                </div>
              </div>
              <div className={styles.company__employee}>
                <img src={employee2} alt=""/>
                <div>
                  <span>Dinesh Chugtai</span>
                  <i>Full stack designer</i>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        </Container>
      </div>
      <Footer email="support@ujo.ru"/>
    </div>
  );
};

export default Company;
