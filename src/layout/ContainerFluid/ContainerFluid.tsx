import {CSSProperties, ReactNode} from 'react';
import styles from './ContainerFluid.module.css';

const ContainerFluid = ({children, style}: {children: ReactNode, style?: CSSProperties}) => {
  return (
    <div className={styles.containerFluid} style={style}>{children}</div>
  );
};

export default ContainerFluid;
