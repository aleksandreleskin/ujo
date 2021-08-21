import styles from './Cursor.module.css';
import {useCallback, useEffect, useState} from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({x: -36, y: -36});

  const addEventListeners = useCallback(() => {
    document.addEventListener('mousemove', onMouseMove);
  }, []);

  const removeEventListeners = useCallback(() => {
    document.removeEventListener('mousemove', onMouseMove);
  }, []);

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, [addEventListeners, removeEventListeners]);

  const onMouseMove = (e: any) => {
    setPosition({x: e.clientX, y: e.clientY});
  };

  return (
    <div className={styles.cursor}>
      <div className={styles.cursor__ring} style={{left: `${position.x}px`, top: `${position.y}px`}}>
      </div>
      <div className={styles.cursor__dot} style={{left: `${position.x}px`, top: `${position.y}px`}}/>
    </div>
  );
};

export default Cursor;
