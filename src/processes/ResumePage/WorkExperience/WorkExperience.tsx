import React, { useState, ChangeEvent, FormEvent } from 'react';
import { DatePicker, Input, Checkbox, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './experience.module.css';
import moment from 'moment';
import dayjs from 'dayjs';

const { TextArea } = Input;

interface WorkExperienceProps {
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

  const handleChange = <K extends keyof Experience>(
    index: number,
    field: K,
    value: Experience[K]
  ) => {
    setExperiences(prevExperiences => {
      const updatedExperiences = [...prevExperiences];
      updatedExperiences[index][field] = value;
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(experiences);
    onClose && onClose();
  };
  return (
    <div className={styles.ModalContent}>
      <h1 className={styles.ModalTitle}>ОПЫТ РАБОТЫ</h1>
      <form className={styles.ModalForm} onSubmit={handleSubmit}>
        {experiences.map((experience, index) => (
          <div key={index} className={styles.ExperienceContainer}>
            <div className={styles.FirstContainer}>
              <label>
                <p className={styles.textP}>Устроился</p>
                <DatePicker
                  className={styles.inputs}
                  value={experience.hiredDate ? dayjs(experience.hiredDate) : null}
                  onChange={(date, dateString) => handleChange(index, 'hiredDate', dateString)}
                />
              </label>

              <label>
                <p className={styles.textP}>Уволился</p>
                <DatePicker
                  className={styles.inputs}
                  value={experience.resignedDate ? dayjs(experience.resignedDate) : null}
                  onChange={(date, dateString) => handleChange(index, 'resignedDate', dateString)}
                />
              </label>

              <label className={styles.checkboxLabel}>
                <p className={styles.textP}>По настоящее время</p>
                <Checkbox
                  className={styles.checkboxInput}
                  checked={experience.currentPosition}
                  onChange={() =>
                    handleChange(index, 'currentPosition', !experience.currentPosition)
                  }
                />
              </label>
            </div>

            <div className={styles.MiddleContainer}>
              <label>
                <p className={styles.textP}>Должность</p>
                <Input
                  className={styles.inputs}
                  placeholder='пример: учитель физики'
                  value={experience.position}
                  onChange={e => handleChange(index, 'position', e.target.value)}
                />
              </label>

              <label className={styles.checkboxLabel}>
                <p className={styles.textP}>Полная занятость</p>
                <Checkbox
                  className={styles.checkboxInput}
                  checked={experience.fullTime}
                  onChange={() => handleChange(index, 'fullTime', !experience.fullTime)}
                />
              </label>
            </div>

            <label>
              <p className={styles.textP}>Школа</p>
              <Input
                className={styles.inputs}
                placeholder='Например: Средняя общеобразовательная школа имени Жаналы уулу Абдыракман'
                value={experience.organization}
                onChange={e => handleChange(index, 'organization', e.target.value)}
              />
            </label>

            <Button
              className={styles.deleteButton}
              htmlType='button'
              onClick={() => handleRemoveExperience(index)}
            >
              <FontAwesomeIcon icon={faTrash} /> Удалить
            </Button>
          </div>
        ))}

        <Button className={styles.addButton} htmlType='button' onClick={handleAddExperience}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>

        <Button className={styles.submitButton} htmlType='submit'>
          Сохранить
        </Button>
      </form>
    </div>
  );
};

export default WorkExperience;
