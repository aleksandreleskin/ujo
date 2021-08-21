import styles from './PopupForm.module.css';
import ContainerFluid from '../../layout/ContainerFluid/ContainerFluid';
import {Dispatch, SetStateAction} from 'react';
import ProposalForm from '../ProposalForm/ProposalForm';
import {connect} from 'react-redux';

const PopupForm = ({showPopup, setShowPopup}: {showPopup: boolean, setShowPopup: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <div className={styles.popupForm} style={{transform: `translateX(${showPopup ? '0' : '100%)'}`}}>
      <ContainerFluid>
        <div className={styles.popupForm__row}>
          <button className={styles.popupForm__button_close} onClick={() => setShowPopup(false)}/>
        </div>
      </ContainerFluid>
      <ProposalForm title="Proposal"/>
    </div>
  );
};


export default connect(
  (state: any) => {
    const {showPopup} = state.headerReducer;

    return {showPopup};
  },
  dispatch => ({
    setShowPopup: () => {
      dispatch({type: 'SET_SHOW_POPUP'})
    },
  })
)(PopupForm);
