import React, { useState } from 'react';
import styles from './slills.module.css';

interface SkillsProps {
  handleNext: () => void;
  onClose?: () => void;
}

const Skills: React.FC<SkillsProps> = ({ handleNext, onClose }) => {
  const [languages, setLanguages] = useState<string>('');

  const handleLanguagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLanguages(e.target.value);
  };

  return (
    <div className={styles.ModalContent}>
      <h1 className={styles.ModalTitle}>ИНОСТРАННЫЕ ЯЗЫКИ И КОМПЬЮТЕРНЫЕ НАВЫКИ</h1>

      <label htmlFor="languagesInput">Иностранные языки:</label>
      <input
        type="text"
        id="languagesInput"
        value={languages}
        onChange={handleLanguagesChange}
        className={styles.inputs}
      />

      <div className={styles.ComputerSkillsSection}>
        <h2>Компьютерные навыки:</h2>
        <label>
          <input type="checkbox" />
          Печать, сканирование, копирование документов
        </label>
        <label>
          <input type="checkbox" />
          Интернет
        </label>
        <label>
          <input type="checkbox" />
          Электронная почта
        </label>
        <label>
          <input type="checkbox" />
          Microsoft Word
        </label>
        <label>
          <input type="checkbox" />
          Microsoft Excel
        </label>
        <label>
          <input type="checkbox" />
          Microsoft Power Point
        </label>

        {/* Пример использования свойства handleNext */}
        <button onClick={handleNext}>Далее</button>
      </div>
    </div>
  );
};

export default Skills;
