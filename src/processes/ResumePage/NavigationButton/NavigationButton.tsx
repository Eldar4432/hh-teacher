import React from 'react';
import styles from '../ResumePage.module.css';

interface NavigationButtonsProps {
  currentStep: number;
  handleNext: () => void;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentStep,
  handleNext,
  setCurrentStep,
}) => {
  return (
    <div className={styles.ButtonContainer}>
      {currentStep > 1 && (
        <button
          type="button"
          onClick={() => setCurrentStep((prevStep) => prevStep - 1)}
          className={styles.BackButton}
        >
          Назад
        </button>
      )}
      {currentStep < 5 && (
        <button
          className={styles.NextButton}
          type="button"
          onClick={handleNext}
        >
          Далее
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;
