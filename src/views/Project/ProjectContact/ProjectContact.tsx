import {useForm} from 'react-hook-form';
import {Link, useHistory} from 'react-router-dom';
import styles from '../Project.module.css';
import InputMask from 'react-input-mask';
import React from 'react';
import Project from '../Project';
import {connect} from 'react-redux';

type Inputs = {
  tel: string,
  email: string,
  name: string,
};

interface IProjectContact {
  name: string;
  setName: any;
  email: string;
  setEmail: any;
  tel: string;
  setTel: any;
}

const ProjectContact = ({name, setName, email, setEmail, tel, setTel}: IProjectContact) => {
  const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();

  const onSubmit = () => {
    !errors.name && !errors.tel && !errors.email && history.push('/project/files');
  };

  const history = useHistory();

  return (
    <Project>
      <div className={styles.project__content}>
        <div className={styles.project__form}>
          <div className={styles.project__row}>
            <span>Your name</span>
            <input
              type="text"
              {...register('name', {required: true})}
              value={name}
              onChange={(event) => setName(event.target.value)}
              style={{borderBottom: errors.name ? '1px solid #FF6624' : '1px solid #ffcf24'}}
            />
            <span>Your phone</span>
            <InputMask
              mask="999-999-9999"
              type="tel"
              {...register('tel', {required: true})}
              value={tel}
              onChange={(event) => setTel(event.target.value)}
              style={{borderBottom: errors.tel ? '1px solid #FF6624' : '1px solid #ffcf24'}}
            />
            <span>and email</span>
            <input
              type="email"
              {...register('email', {required: true, pattern: /^\S+@\S+$/i})}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              style={{borderBottom: errors.email ? '1px solid #FF6624' : '1px solid #ffcf24'}}
            />
          </div>
          <div className={styles.project__buttons}>
            <Link to="/project/service" className={styles.project__button_link}>Back</Link>
            <Link to="/project/files" onClick={(event) => {
              event.preventDefault();
              handleSubmit(onSubmit)();
            }} className={styles.project__button}>Next</Link>
          </div>
        </div>
      </div>
    </Project>
  );
};

export default connect(
  (state: any) => {
    const {name, email, tel} = state.projectReducer;

    return {name, email, tel};
  },
  dispatch => ({
    setName: (data: string) => {
      dispatch({type: 'SET_NAME', data});
    },
    setEmail: (data: string) => {
      dispatch({type: 'SET_EMAIL', data});
    },
    setTel: (data: string) => {
      dispatch({type: 'SET_TEL', data});
    },
  })
)(ProjectContact);
