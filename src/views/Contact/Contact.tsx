import Header from '../../components/Header/Header';
import React, {useState} from 'react';
import styles from './Contact.module.css';
import ContainerFluid from '../../layout/ContainerFluid/ContainerFluid';
import SocialLinks from '../../components/FirstScreen/components/SocialLinks/SocialLinks';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Office from './components/Office/Office';

const Contact = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeContact, setActiveContact] = useState(0);

  const contacts = [
    {
      city: 'Malaga (Spain)',
      address: 'Science Park, Calle Faraday, 34, 28048 Madrid Spain',
      email: 'support@ujo.ru',
      phone: '+34 997 433 642',
      coordinates: '3Af2b6d547583d66e0dff8a7fa28685a15fe8de58d6dd1dc3b4e5d15dbd4a36433'
    },
    {
      city: 'Moscow (Russia)',
      address: 'Moscow, Tverskaya Street, 4',
      email: 'support@ujo.ru',
      phone: '+7 (495) 235-32-95',
      coordinates: '3Ac7e793374048eaab605f26962e413d7b3d8dce6b5d3bf2c521601adbe95e3c26'
    },
    {
      city: 'Tallinn (Estonia)',
      address: 'Science Park Tehnopol Teaduspargi 9/5 Tallinn 12658 Estonia',
      email: 'support@ujo.ru',
      phone: '+34 998 542 546',
      coordinates: '3Ac7e793374048eaab605f26962e413d7b3d8dce6b5d3bf2c521601adbe95e3c26'
    },
  ];

  const addressesBlock = contacts.map((contact, i) => (
    <div className={styles.contact__contact} key={i}>
      <Link
        to="#"
        onClick={() => {
          setIsActive(true);
          setActiveContact(i);
        }}
        className={styles.contact__cityName}
      >
        {contact.city}:
      </Link>
      <span>{contact.address}</span>
      <a href={`mailto:${contact.email}`}>{contact.email}</a>
      <a href={`tel:${contact.phone}`}>{contact.phone}</a>
    </div>
  ));

  return (
    <div className={styles.contact} style={{ overflowY: isActive ? 'hidden' : 'auto' }}>
      <Header/>
      <Office
        isActive={isActive}
        setIsActive={setIsActive}
        contact={contacts[activeContact]}
      />
      <ContainerFluid style={{height: '100%'}}>
        <div style={{position: 'relative', height: '100%'}}>
          <SocialLinks/>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1.5}}
          >
            <div className={styles.contact__content}>
              <h1 className={styles.contact__title}>Contact</h1>
              <div className={styles.contact__contactsList}>
                {addressesBlock}
              </div>
            </div>
          </motion.div>
        </div>
      </ContainerFluid>
      <Footer email="support@ujo.ru"/>
    </div>
  );
};

export default Contact;
