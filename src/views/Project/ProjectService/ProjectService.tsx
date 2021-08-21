import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import styles from '../Project.module.css';
import Select from '../../../components/ProposalForm/components/Select/Select';
import Project from '../Project';
import {connect} from 'react-redux';

interface IProjectService {
  selectService: string;
  setSelectService: any;
}

const ProjectService = ({selectService, setSelectService}: IProjectService) => {
  // const [selectService, setSelectService] = useState('');
  const [isErrorService, setIsErrorService] = useState(false);

  const history = useHistory();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!selectService) {
      setIsErrorService(true);
    }
    selectService && history.push('/project/contact');
  };

  return (
    <Project>
      <div className={styles.project__content}>
        <div className={styles.project__form}>
          <div className={styles.project__row}>
            <span>Select service</span>
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
              setSelectData={setSelectService}
              isError={isErrorService}
              setIsError={setIsErrorService}
              selectData={selectService}
            />
          </div>
          <div className={styles.project__buttons}>
            <Link to="/project" className={styles.project__button_link}>Back</Link>
            <Link to="/project/contact" onClick={handleSubmit} className={styles.project__button}>Next</Link>
          </div>
        </div>
      </div>
    </Project>
  );
};

export default connect(
  (state: any) => {
    const {selectService} = state.projectReducer;

    return {selectService};
  },
  dispatch => ({
    setSelectService: (data: string) => {
      dispatch({type: 'SET_SELECT_SERVICE', data});
    }
  })
)(ProjectService);
