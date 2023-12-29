import React, { useState } from 'react';
import styles from './ResumePage.module.css';
import IndicatorForm from './IndicatorForm/IndicatorForm';
import PersonalInformation from '../../processes/ResumePage/PersonalInformation/PersonalInformation';
import WorkExperiences from '../../processes/ResumePage/WorkExperience/WorkExperience';
import Education from '../../processes/ResumePage/Education/Education';
import Courses from '../../processes/ResumePage/Courses/Courses';
import Skills from '../../processes/ResumePage/Skills/Skills';
import NavigationButtons from './NavigationButton/NavigationButton';

interface ResumePageProps {
  onClose: () => void;
}

const ResumePage: React.FC<ResumePageProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleNext = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };
  const someIndexValue = 0;

  return (
    <div className={styles.ModalContent}>
      <IndicatorForm currentStep={currentStep} />
      <form className={styles.ModalForm} onSubmit={e => e.preventDefault()}>
        {currentStep === 1 && <PersonalInformation handleNext={handleNext} />}
        {currentStep === 2 && <WorkExperiences handleNext={handleNext} />}
        {currentStep === 3 && <Education handleNext={handleNext} index={someIndexValue} />}
        {currentStep === 4 && (
          <Courses handleNext={handleNext} index={someIndexValue} onCourseChange={() => {}} />
        )}
        {currentStep === 5 && <Skills handleNext={handleNext} />}
        <NavigationButtons
          currentStep={currentStep}
          handleNext={handleNext}
          setCurrentStep={setCurrentStep}
        />
      </form>
    </div>
  );
};

export default ResumePage;
