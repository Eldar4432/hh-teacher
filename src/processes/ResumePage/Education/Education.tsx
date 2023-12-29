import React, { useState, useEffect } from 'react';
import styles from './education.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Input, Button, Select as AntSelect } from 'antd';
import axios from 'axios';

interface EducationProps {
  handleNext: () => void;
  index: number;
}

interface EducationItem {
  institution: string;
  faculty: string;
  specialty: string;
  graduationYear: string;
  studyForm: string;
}

const { Option } = AntSelect;

const Education: React.FC<EducationProps> = ({ handleNext, index }) => {
  const [educations, setEducations] = useState<EducationItem[]>([
    {
      institution: '',
      faculty: '',
      specialty: '',
      graduationYear: '',
      studyForm: '',
    },
  ]);

  const handleEducationChange = (index: number, field: keyof EducationItem, value: string) => {
    setEducations(prevEducations => {
      const updatedEducations = [...prevEducations];
      updatedEducations[index][field] = value;
      return updatedEducations;
    });
  };

  const handleAddEducation = () => {
    setEducations(prevEducations => [
      ...prevEducations,
      {
        institution: '',
        faculty: '',
        specialty: '',
        graduationYear: '',
        studyForm: '',
      },
    ]);
  };

  const handleRemoveEducation = (index: number) => {
    setEducations(prevEducations => {
      const updatedEducations = [...prevEducations];
      updatedEducations.splice(index, 1);
      return updatedEducations;
    });
  };

  const graduationYearOptions: { value: string; label: string }[] = [
    { value: '2020', label: '2020' },
    { value: '2021', label: '2021' },
  ];

  const [educationOptions, setEducationOptions] = useState([]);

  useEffect(() => {
    const apiUrlForm = 'http://localhost:5000/hh/api/form-education';
    axios.get(apiUrlForm).then(resp => {
      const educationsFromServerFrom = resp.data.data.form_education;
      const formattedEducationsFrom = educationsFromServerFrom.map((e: any) => ({
        value: e.id_form_of_education,
        label: e.form_of_education,
      }));
      setEducationOptions(formattedEducationsFrom);
    });
  }, []);

  return (
    <div className={styles.ModalContent}>
      <h1 className={styles.ModalTitle}>ОБРАЗОВАНИЕ</h1>
      <form className={styles.ModalForm}>
        {educations.map((education, educationIndex) => (
          <div key={educationIndex} className={styles.EducationContainer}>
            <label>
              <p className={styles.textP}>Учебное заведение</p>
              <Input
                className={styles.inputs}
                placeholder='например: Институт Информационных Технологий'
                value={education && education.institution ? education.institution : ''}
                onChange={e => handleEducationChange(index, 'institution', e.target.value)}
              />
            </label>

            <label>
              <p className={styles.textP}>Факультет</p>
              <Input
                className={styles.inputs}
                placeholder='например: Институт Информационных Технологий'
                value={education && education.faculty ? education.faculty : ''}
                onChange={e => handleEducationChange(index, 'faculty', e.target.value)}
              />
            </label>

            <label>
              <p className={styles.textP}>Специальность</p>
              <Input
                className={styles.inputs}
                placeholder='например: Прикладная информатика'
                value={education && education.specialty ? education.specialty : ''}
                onChange={e => handleEducationChange(index, 'specialty', e.target.value)}
              />
            </label>

            <label>
              <p className={styles.textP}>Год окончания</p>
              <AntSelect
                options={graduationYearOptions}
                value={{
                  value: education && education.graduationYear ? education.graduationYear : '',
                  label:
                    education && education.graduationYear
                      ? education.graduationYear.toString()
                      : '',
                }}
                onChange={selectedOption => {
                  if (selectedOption) {
                    handleEducationChange(index, 'graduationYear', selectedOption.value);
                  }
                }}
              />
            </label>

            <label>
              <p className={styles.textP}>Форма обучения</p>
              <AntSelect
                options={educationOptions}
                value={{
                  value: education && education.studyForm ? education.studyForm : '',
                  label: education && education.studyForm ? education.studyForm : '',
                }}
                onChange={selectedOption => {
                  if (selectedOption) {
                    handleEducationChange(index, 'studyForm', selectedOption.value);
                  }
                }}
              />
            </label>

            <button
              className={styles.deleteButton}
              type='button'
              onClick={() => handleRemoveEducation(index)}
            >
              <FontAwesomeIcon icon={faTrash} /> Удалить
            </button>
          </div>
        ))}

        <button className={styles.addButton} type='button' onClick={handleAddEducation}>
          <FontAwesomeIcon icon={faPlus} />
        </button>

        <button onClick={handleNext}>Далее</button>
      </form>
    </div>
  );
};

export default Education;
