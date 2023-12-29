import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './courses.module.css';

interface CoursesProps {
  handleNext: () => void;
  onClose?: () => void;
  index: number;
  onCourseChange: (index: number, field: string, value: string) => void; // Add this line
}
const Courses: React.FC<CoursesProps> = ({ handleNext, index, onCourseChange, onClose }) => {
  const [courses, setCourses] = useState([
    {
      courseName: '',
      institution: '',
      graduationYear: '',
      duration: '',
    },
  ]);

  const handleAddCourse = () => {
    setCourses(prevCourses => [
      ...prevCourses,
      {
        courseName: '',
        institution: '',
        graduationYear: '',
        duration: '',
      },
    ]);
  };

  const handleRemoveCourse = (index: number) => {
    setCourses(prevCourses => {
      const updatedCourses = [...prevCourses];
      updatedCourses.splice(index, 1);
      return updatedCourses;
    });
  };

  const graduationYearOptions = Array.from({ length: 35 }, (_, i) => 1990 + i).map(year => ({
    value: year,
    label: year.toString(),
  }));

  return (
    <div className={styles.ModalContent}>
      <h1 className={styles.ModalTitle}>КУРСЫ И ТРЕНИНГИ</h1>
      <form className={styles.ModalForm}>
        {courses.map((course, courseIndex) => (
          <div key={courseIndex} className={styles.CourseContainer}>
            <label>
              <p className={styles.textP}>Название курса</p>
              <input
                className={styles.inputs}
                type='text'
                placeholder='Курс по математике'
                value={course.courseName}
                onChange={e => onCourseChange(index, 'courseName', e.target.value)}
              />
            </label>

            <label>
              <p className={styles.textP}>Учебное заведение</p>
              <input
                className={styles.inputs}
                type='text'
                placeholder='Университет A'
                value={course.institution}
                onChange={e => onCourseChange(index, 'institution', e.target.value)}
              />
            </label>

            <div className={styles.yearFlex}>
              <label>
                <p className={styles.textP}>Год окончания</p>
                <input
                  className={styles.inputs}
                  type='text'
                  placeholder='Например: 2023год'
                  value={course.graduationYear}
                  onChange={e => onCourseChange(index, 'graduationYear', e.target.value)}
                />
              </label>

              <label>
                <p className={styles.textP}>Продолжительность</p>
                <input
                  className={styles.inputs}
                  type='text'
                  placeholder='Например: 3 месяца'
                  value={course.duration}
                  onChange={e => onCourseChange(index, 'duration', e.target.value)}
                />
              </label>
            </div>
            <button
              className={styles.deleteButton}
              type='button'
              onClick={() => handleRemoveCourse(index)}
            >
              <FontAwesomeIcon icon={faTrash} /> Удалить
            </button>
          </div>
        ))}
        <div className={styles.plusButton}>
          <button className={styles.addButton} type='button' onClick={handleAddCourse}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <button onClick={handleNext}>Далее</button>
      </form>
    </div>
  );
};

export default Courses;
