import React, {SetStateAction, useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import styles_proposal from '../../../components/ProposalForm/ProposalForm.module.css';
import styles from '../Project.module.css';
import {Link} from 'react-router-dom';
import Project from '../Project';
import {connect} from 'react-redux';

interface IProjectFiles {
  setName: any;
  setEmail: any;
  setTel: any;
  setSelectProfession: any;
  setSelectActivity: any;
  setSelectService: any;
}

const ProjectFiles = ({setName, setEmail, setTel, setSelectProfession, setSelectActivity, setSelectService}: IProjectFiles) => {
  const [myFiles, setMyFiles]: [Array<any>, SetStateAction<any>] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    const filesArray = [...myFiles, ...acceptedFiles];
    setMyFiles(filesArray);
  }, [myFiles]);

  const {
    getRootProps,
    getInputProps,
  } = useDropzone({onDrop, accept: 'image/jpeg, image/png, application/pdf'});

  const files = myFiles.map((file: any, i: number) => (
    <li key={i}>
      {file.path}
      <button
        type="button"
        onClick={() => handleDeleteFile(file)}
        className={styles_proposal.proposalForm__button_success}
      />
    </li>
  ));

  const activeStyle = {
    background: 'transparent',
    border: 'none',
    fontSize: '25px',
    color: '#FFCF24',
    padding: 0,
    margin: 0,
    display: 'inline-block',
  };

  const handleDeleteFile = (file: File) => {
    const newFiles = [...myFiles];
    newFiles.splice(newFiles.indexOf(file), 1);
    setMyFiles(newFiles);
  };

  return (
    <Project>
      <div className={styles.project__content}>
        <div className={styles.project__form}>
          <h4>Files: JPG, PNG, PDF</h4>
          <div className={styles.project__row}>
            <div className={styles_proposal.proposalForm__file} style={{
              margin: 0,
              width: 'auto'
            }}>
              <div className={styles_proposal.proposalForm__label_file} {...getRootProps()} style={{
                outline: 'none',
              }}>
                <input {...getInputProps({multiple: true})}/>
                <div className={styles_proposal.proposalForm__column} style={activeStyle}>
                  <span className={styles.project__file} style={activeStyle}>Attach a file</span> &nbsp;&nbsp; +
                </div>
              </div>
              <ul className={styles_proposal.proposalForm__files}>{files}</ul>
            </div>
          </div>
          <div className={styles.project__buttons}>
            <Link to="/project/contact" className={styles.project__button_link}>Back</Link>
            <Link to="/" onClick={() => {
              setName('');
              setEmail('');
              setTel('');
              setSelectProfession('');
              setSelectActivity('');
              setSelectService('');
            }} className={styles.project__button}>Submit</Link>
          </div>
        </div>
      </div>
    </Project>
  );
};

export default connect(
  () => ({}),
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
    setSelectProfession: (data: string) => {
      dispatch({type: 'SET_SELECT_PROFESSION', data});
    },
    setSelectActivity: (data: string) => {
      dispatch({type: 'SET_SELECT_ACTIVITY', data});
    },
    setSelectService: (data: string) => {
      dispatch({type: 'SET_SELECT_SERVICE', data});
    }
  })
)(ProjectFiles);
