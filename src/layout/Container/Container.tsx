import {CSSProperties, ReactNode} from 'react';
import styles from './Container.module.css';

const Container = ({children, style}: {children: ReactNode, style?: CSSProperties}) => {
  return (
    <div className={styles.container} style={style}>{children}</div>
  );
};

export default Container;
