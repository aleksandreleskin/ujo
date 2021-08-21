import styles from './ProposalForm.module.css';
import Container from '../../layout/Container/Container';
import Select from './components/Select/Select';
import upload_icon from '../../assets/images/file-upload.png';
import {useDropzone} from 'react-dropzone';
import {SetStateAction, useCallback, useMemo, useState} from 'react';
import {useForm} from 'react-hook-form';
import InputMask from 'react-input-mask';

type Inputs = {
  tel: string,
  email: string,
  name: string,
  license: string
};

const ProposalForm = ({title = 'Find out the cost of project development'}) => {
  const [myFiles, setMyFiles]: [Array<any>, SetStateAction<any>] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    const filesArray = [...myFiles, ...acceptedFiles];
    setMyFiles(filesArray);
  }, [myFiles]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({onDrop, accept: 'image/jpeg, image/png, application/pdf'});

  const activeStyle = {
    background: 'rgba(253, 196, 0, 0.1)',
    border: '2px dashed #FDC400',
    transition: '0.3s ease-in-out'
  };

  const handleDeleteFile = (file: File) => {
    const newFiles = [...myFiles];
    newFiles.splice(newFiles.indexOf(file), 1);
    setMyFiles(newFiles);
  };

  const files = myFiles.map((file: any, i: number) => (
    <li key={i}>
      {file.path}
      <button
        type="button"
        onClick={() => handleDeleteFile(file)}
        className={styles.proposalForm__button_success}
      />
    </li>
  ));

  const style = useMemo(() => ({
    ...(isDragActive ? activeStyle : {}),
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [isDragActive]);

  const checkboxID = Math.floor((Math.random() * 1000000) + 1);

  const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();

  const [selectData, setSelectData] = useState('');
  const [isError, setIsError] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const [formName, setFormName] = useState('');
  const [formTel, setFormTel] = useState('');
  const [formEmail, setFormEmail] = useState('');

  return (
    <form className={styles.proposalForm} onSubmit={(event) => {
      event.preventDefault();
      handleSubmit(onSubmit)();
      if (!selectData) {
        setIsError(true);
      }
    }}>
      <Container>
        <h2 className={styles.proposalForm__title}>{title}</h2>
        <div className={styles.proposalForm__contacts}>
          <a href="mailto:support@ujo.ru" className={styles.proposalForm__email}>support@ujo.ru</a>
          <a href="tel:650-223-6337" className={styles.proposalForm__tel}>650-223-6337</a>
        </div>
        <div className={styles.proposalForm__row}>
          <label>
            <div style={{border: isError ? '1px solid #ff6624' : 'none'}}>
              <Select
                placeholder="Select service"
                options={['Service 1', 'Service 2', 'Service 3', 'Service 4']}
                showArrow={true}
                setSelectData={setSelectData}
                isError={isError}
                setIsError={setIsError}
                style={{border: isError ? '1px solid #ff6624' : '1px solid #ffcf24'}}
              />
            </div>
          </label>
          <label>
            <input
              type="text"
              placeholder="Your name"
              {...register('name', {required: true})}
              className={errors.name && styles.proposalForm__input_error}
              value={formName}
              onChange={(event: any) => setFormName(event.target.value)}
            />
            {errors.name && <button type="button" onClick={() => setFormName('')}/>}
          </label>
        </div>
        <div className={styles.proposalForm__row}>
          <label>
            <InputMask
              mask="999-999-9999"
              type="tel"
              placeholder="Your phone"
              {
                ...register('tel',
                  {required: true})
              }
              className={errors.tel && styles.proposalForm__input_error}
              value={formTel}
              onChange={(event: any) => setFormTel(event.target.value)}
            />
            {errors.tel && <button type="button" onClick={() => setFormTel('')}/>}
          </label>

          <label>
            <input
              type="email"
              placeholder="Your email"
              {
                ...register('email',
                  {required: true, pattern: /^\S+@\S+$/i})
              }
              className={errors.email && styles.proposalForm__input_error}
              value={formEmail}
              onChange={(event: any) => setFormEmail(event.target.value)}
            />
            {errors.email && <button type="button" onClick={() => setFormEmail('')}/>}
          </label>
        </div>
        <div className={styles.proposalForm__row}>
          <label className={styles.proposalForm__labelTextarea}>
            <textarea placeholder="Your message"/>
          </label>
        </div>
        <div className={styles.proposalForm__row}>
          <label className={styles.proposalForm__labelFile}>
            <div className={styles.proposalForm__file}>
              <div className={styles.proposalForm__label_file} {...getRootProps()}>
                <input {...getInputProps({multiple: true})}/>
                <div className={styles.proposalForm__column} style={style}>
                  <img src={upload_icon} alt=""/>
                  <span>Drag and drop the file or <i> open </i></span>
                  <span>File: JPG, PNG, PDF</span>
                </div>
              </div>
              <ul className={styles.proposalForm__files}>{files}</ul>
            </div>
          </label>
        </div>
        <div className={styles.proposalForm__row}>
          <input
            type="checkbox"
            id={`form_license-${checkboxID}`}
            {
              ...register('license',
                {required: true})
            }
          />
          <label htmlFor={`form_license-${checkboxID}`} className={styles.proposalForm__license}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <span>I accept the terms of the <a href="#"> Personal data processing policy </a>, <a href="#"> User agreement </a> and give my consent to the processing of my personal data.</span>
            <span className={styles.proposalForm__license_error}>{errors.license && 'You must agree to the terms'}</span>
          </label>
        </div>
        <div className={styles.proposalForm__row}>
          <button className={styles.proposalForm__submit}>Submit</button>
        </div>
      </Container>
    </form>
  );
};

export default ProposalForm;
