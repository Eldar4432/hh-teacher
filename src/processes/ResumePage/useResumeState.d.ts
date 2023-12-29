import { useState } from "react";

export interface ResumeState {
  firstName: string;
  lastName: string;
  middleName: string;
  languages: string[];
  languageProficiency: Record<string, string>; // Измените тип на ваш актуальный тип
  education: string;
  diploma: string;
  certificates: string;
  teachingSubject: string;
  workExperience: string;
  skills: string;
  salaryExpectation: string;
  profileImage: string;
  workSchedule: string;
  employmentSchedule: string;
  relocation: string;
  readyToTravel: boolean;
  phone: string;
  email: string;
  city: string;
  birthDate: Date | null;
  gender: string;
  maritalStatus: string;
  citizenship: string;
  currentStep: number;
}

export interface EmploymentScheduleOption {
  value: string;
  label: string;
}

const useResumeState = () => {
  const [formData, setFormData] = useState<ResumeState>({
    currentStep: 1,
  });

  const workScheduleOptions = [
    { value: "fullTime", label: "Полный день" },
    { value: "shiftWork", label: "Сменный график" },
    { value: "flexible", label: "Гибкий график" },
    { value: "remote", label: "Удаленная работа" },
  ];

  export const [employmentScheduleOptions] = useState<EmploymentScheduleOption[]>([
    { value: "fullEmployment", label: "Полная" },
    { value: "shiftEmployment", label: "Частичная" },
    { value: "flexibleEmployment", label: "Проектная" },
    { value: "remoteEmployment", label: "Стажировка" },
    { value: "volonterEmployment", label: "Волонтерство" },
  ]);

  const educationOptions = [
  ];

  const citizenshipOptions = [
  ];

  const proficiencyLevels = ["Начальный", "Средний", "Продвинутый"];

  const options = [
    { value: "yes", label: "Да" },
    { value: "no", label: "Нет" },
  ];

  const [relocationOptions] = useState([
    { value: "yes", label: "Да" },
    { value: "no", label: "Нет" },
  ]);

  const [readyToTravelOptions] = useState([
    { value: true, label: "Да" },
    { value: false, label: "Нет" },
  ]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          profileImage: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Добавьте здесь вашу логику для отправки данных, например, на сервер
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return {
    formData,
    setFormData,
    workScheduleOptions,
    employmentScheduleOptions,
    educationOptions,
    citizenshipOptions,
    maritalStatusOptions,
    proficiencyLevels,
    options,
    handleImageChange,
    handleSubmit,
    handleChange,
    cityOptions,
    readyToTravelOptions,
    relocationOptions,
    resumeState,
    setResumeState,
  };
};

export const maritalStatusOptions = [
  { value: "single", label: "Холост/Не замужем" },
  { value: "married", label: "Женат/Замужем" },
  { value: "divorced", label: "Разведен(а)" },
  // Другие опции
];

export const cityOptions = [
  { value: "Талас", label: "Талас" },
  { value: "Нарын", label: "Нарын" },
  { value: "Ысык-Көл", label: "Ысык-Көл" },
  { value: "Чуй", label: "Чуй" },
  { value: "Ош", label: "Ош" },
  { value: "Баткен", label: "Баткен" },
  { value: "Жалал-Абад", label: "Жалал-Абад" },
  { value: "Бишкек", label: "Бишкек" },
];

export default useResumeState;
