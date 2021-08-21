import styles from './Office.module.css';
import React, {Dispatch, SetStateAction} from 'react';

interface IContact {
  city: string;
  address: string;
  email: string;
  phone: string;
  coordinates: string;
}

interface IOffice {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  contact: IContact;
}

const Office = ({isActive, setIsActive, contact}: IOffice) => {
  return (
    <div className={styles.office} style={{
      zIndex: isActive ? 11 : -1,
      transition: isActive ? 'none' : '0s ease-in-out 1s'
    }}>
      <div className={styles.office__overlay} style={{opacity: isActive ? 1 : 0}} onClick={() => setIsActive(false)}/>
      <div className={styles.office__content} style={{right: isActive ? 0 : '-100%'}}>
        <button className={styles.office__closeBtn} onClick={() => setIsActive(false)}>
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.92285 1L37.0002 37" stroke="white"/>
            <path d="M36.0771 1L0.999786 37" stroke="white"/>
          </svg>
        </button>
        <div className={styles.office__wrapper}>
          <div className={styles.office__row}>
            <h3>{contact.city}</h3>
            <span>{contact.address}</span>
            <div className={styles.office__contact}>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </div>
          </div>
          <div className={styles.office__row}>
            <iframe
              title="map"
              src={`https://yandex.ru/map-widget/v1/?um=constructor%${contact.coordinates}&amp;source=constructor`}
              frameBorder="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Office;
