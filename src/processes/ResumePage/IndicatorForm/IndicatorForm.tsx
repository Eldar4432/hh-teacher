// IndicatorForm.tsx

import React from 'react';
import styles from './IndicatorForm.module.css';

export interface IndicatorFormProps {
  currentStep: number;
}

const IndicatorForm: React.FC<IndicatorFormProps> = ({ currentStep }) => {
  const stepIndicatorStyle = (stepNumber: number) => ({
    backgroundColor: stepNumber <= currentStep ? 'green' : 'gray',
  });

  return (
    <div className={styles.StepIndicatorContainer}>
      <div style={stepIndicatorStyle(1)} className={styles.StepIndicator}>
        1
      </div>
      <div style={stepIndicatorStyle(2)} className={styles.StepIndicator}>
        2
      </div>
      <div style={stepIndicatorStyle(3)} className={styles.StepIndicator}>
        3
      </div>
      <div style={stepIndicatorStyle(4)} className={styles.StepIndicator}>
        4
      </div>
      <div style={stepIndicatorStyle(5)} className={styles.StepIndicator}>
        5
      </div>
      <div style={stepIndicatorStyle(6)} className={styles.StepIndicator}>
        6
      </div>
    </div>
  );
};

export default IndicatorForm;
