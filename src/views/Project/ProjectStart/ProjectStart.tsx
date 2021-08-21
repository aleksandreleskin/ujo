import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import styles from '../Project.module.css';
import Select from '../../../components/ProposalForm/components/Select/Select';
import Project from '../Project';
import {connect} from 'react-redux';

interface IProjectStart {
  selectProfession: string;
  setSelectProfession: any;
  selectActivity: string;
  setSelectActivity: any;
}

const ProjectStart = ({selectProfession, setSelectProfession, selectActivity, setSelectActivity}: IProjectStart) => {
  const [isErrorProfession, setIsErrorProfession] = useState(false);

  const [isErrorActivity, setIsErrorActivity] = useState(false);


  const history = useHistory();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!selectProfession) {
      setIsErrorProfession(true);
    }
    if (!selectActivity) {
      setIsErrorActivity(true);
    }
    selectActivity && selectProfession && history.push('/project/service');
  };

  return (
    <Project>
      <div className={styles.project__content}>
        <div className={styles.project__form}>
          <h4>Begin</h4>
          <div className={styles.project__row}>
            <span>You are</span>
            <Select
              options={[
                'Product designer',
                'Frontend developer',
                'Backend developer',
                'Full-stack developer',
                'Project manager',
                'HR-manager'
              ]}
              placeholder=""
              showArrow={false}
              setSelectData={setSelectProfession}
              isError={isErrorProfession}
              setIsError={setIsErrorProfession}
              selectData={selectProfession}
            />
            <span>what are you doing</span>
            <Select
              options={[
                'Product design',
                'Frontend development',
                'Backend development',
                'Full-stack development',
                'Product management',
                'HR-management'
              ]}
              placeholder=""
              showArrow={false}
              setSelectData={setSelectActivity}
              isError={isErrorActivity}
              setIsError={setIsErrorActivity}
              selectData={selectActivity}
            />
          </div>
          <div className={styles.project__buttons}>
            <Link to="/project/service" onClick={handleSubmit} className={styles.project__button}>Next</Link>
          </div>
        </div>
      </div>
    </Project>
  );
};

export default connect(
  (state: any) => {
    const {selectProfession, selectActivity} = state.projectReducer;

    return {selectProfession, selectActivity};
  },
  dispatch => ({
    setSelectProfession: (data: string) => {
      dispatch({type: 'SET_SELECT_PROFESSION', data});
    },
    setSelectActivity: (data: string) => {
      dispatch({type: 'SET_SELECT_ACTIVITY', data});
    }
  })
)(ProjectStart);
