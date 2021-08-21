import styles from './Select.module.css';
import {Dispatch, ReactNode, SetStateAction, useEffect, useRef, useState} from 'react';
import select_arrow from '../../../../assets/images/select_arrow.svg';

interface ISelect {
  placeholder: string;
  options: Array<ReactNode>;
  showArrow: boolean;
  setSelectData: Dispatch<SetStateAction<string>>;
  isError?: boolean;
  setIsError?: Dispatch<SetStateAction<boolean>>;
  style?: any;
  selectData?: string;
}

const Select = ({placeholder, options, showArrow, setSelectData, selectData, isError, setIsError, style}: ISelect) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [selectedElement, setSelectedElement]: [null, Dispatch<SetStateAction<any>>] = useState(null);
  const [activeElement, setActiveElement]: [null, Dispatch<SetStateAction<any>>] = useState(null);

  const index = options.indexOf(selectData);
  console.log(index);

  const optionsList = options.map((option, i) => {
    return (
      <span
        key={i}
        onClick={() => {
          setSelectedElement(option);
          setActiveElement(i);
          setSelectData(String(option));
          setIsError && setIsError(false);
        }}
        className={(index === i) || (activeElement === i) ? `${styles.select__option_active}` : ''}>
        {option}
      </span>
    );
  });

  const wrapperRef = useRef(null);
  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      const handleClickOutside = (event: Event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setActiveMenu(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideAlerter(wrapperRef);

  return (
    <div
      ref={wrapperRef}
      className={!isError ? (activeMenu ? styles.select__active : styles.select) : styles.select__error}
      onClick={() => setActiveMenu(!activeMenu)}
      style={{
        background: showArrow ? `url('${select_arrow}') no-repeat center right -1px` : 'transparent',
        border: showArrow ? `1px solid #ffcf24` : 'none',
        ...style
      }}
    >
      <span
        className={styles.select__placeholder}
      >
        {selectData || selectedElement || placeholder}
      </span>
      <div className={activeMenu ? styles.select__options_active : styles.select__options}>{optionsList}</div>
    </div>
  );
};

export default Select;
