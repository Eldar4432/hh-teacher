import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './experience.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

interface WorkExperienceProps {
  // onClose: () => void;
  handleNext: () => void;
  onClose?: () => void; 
}

interface Experience {
  hiredDate: string;
  resignedDate: string;
  currentPosition: boolean;
  position: string;
  fullTime: boolean;
  organization: string;
  responsibilities: string;
  achievements: string;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ handleNext, onClose }) => {
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      hiredDate: '',
      resignedDate: '',
      currentPosition: false,
      position: '',
      fullTime: false,
      organization: '',
      responsibilities: '',
      achievements: '',
    },
  ]);

  const handleChange = (index: number, field: keyof Experience, value: string | boolean) => {
    setExperiences(prevExperiences => {
      const updatedExperiences = [...prevExperiences];
      // updatedExperiences[index][field] = value;
      return updatedExperiences;
    });
  };

  const handleAddExperience = () => {
    setExperiences(prevExperiences => [
      ...prevExperiences,
      {
        hiredDate: '',
        resignedDate: '',
        currentPosition: false,
        position: '',
        fullTime: false,
        organization: '',
        responsibilities: '',
        achievements: '',
      },
    ]);
  };

  const handleRemoveExperience = (index: number) => {
    setExperiences(prevExperiences => {
      const updatedExperiences = [...prevExperiences];
      updatedExperiences.splice(index, 1);
      return updatedExperiences;
    });
  };

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   console.log(experiences);
  //   onClose();
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(experiences);
    
    // Проверяем, существует ли onClose, прежде чем вызывать
    onClose && onClose();
  };
  return (
    <div className={styles.ModalContent}>
      <h1 className={styles.ModalTitle}>ОПЫТ РАБОТЫ</h1>
      <form className={styles.ModalForm} onSubmit={handleSubmit}>
        {experiences.map((experience, index) => (
          <div key={index} className={styles.ExperienceContainer}>
          </div>
        ))}

        <button className={styles.addButton} type='button' onClick={handleAddExperience}>
          <FontAwesomeIcon icon={faPlus} />
        </button>

        <button className={styles.submitButton} type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default WorkExperience;
