import React, { useEffect, useState } from 'react';
import { ChangeEvent } from 'react';

import Modal from 'react-modal';
import { Input, Select, message } from 'antd';
import styles from './PersonalInformation.module.css';
import axios from 'axios';

Modal.setAppElement('#root');

interface PersonalInformationProps {
  handleNext: () => void;
}

const { Option } = Select;

const PersonalInformation: React.FC<PersonalInformationProps> = ({ handleNext }) => {
  const [pin, setPin] = useState<string>('');
  const [educationOptions, setEducationOptions] = useState<{ value: string; label: string }[]>([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:5000/hh/api/education';

    axios.get(apiUrl).then(resp => {
      const educationsFromServer = resp.data.data.educations;
      const formattedEducations = educationsFromServer.map(
        (edu: { id_education: number; education: string }) => ({
          value: edu.id_education.toString(),
          label: edu.education,
        })
      );

      setEducationOptions(formattedEducations);
    });
  }, [setEducationOptions]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    inputValue = inputValue.replace(/\D/g, '').slice(0, 14);

    if (/^[1-2]?$/.test(inputValue[0])) {
      setPin(inputValue);
    }
  };

  const [formData, setFormData] = useState({
    profileImage: null as string | null,
  });

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData({
          ...formData,
          profileImage: reader.result as string,
        });
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1>ЗАПОЛНИТЕ РЕЗЮМЕ</h1>
      <div className={styles.ModalFormFlex}>
        <div className={styles.NameRow}>
          <label>
            <p className={styles.textP}>Фамилия</p>
            <Input
              className={styles.inputs}
              required
              type='text'
              name='lastName'
              placeholder='Асанов'
            />
          </label>

          <label>
            <p className={styles.textP}>Имя</p>
            <Input
              className={styles.inputs}
              required
              type='text'
              name='firstName'
              placeholder='Асан'
            />
          </label>

          <label>
            <p className={styles.textP}>Отчество</p>
            <Input
              className={styles.inputs}
              required
              type='text'
              name='middleName'
              placeholder='Асанович'
            />
          </label>
        </div>
        <div
          className={styles.ProfileImageContainer}
          onClick={() => document.getElementById('profileImageInput')?.click()}
        >
          <img
            src={formData.profileImage ?? undefined}
            alt='Profile'
            className={styles.ProfileImage}
          />
          <input
            required
            type='file'
            accept='image/*'
            onChange={handleImageChange}
            style={{ display: 'none' }}
            id='profileImageInput'
          />
        </div>
      </div>

      <label>
        <p className={styles.textP}>ПИН</p>
        <Input
          className={styles.inputs}
          value={pin}
          maxLength={14}
          placeholder='например: 12345678901234'
          type='text'
          onChange={handleInputChange}
        />
      </label>

      <label>
        <p className={styles.textP}>Должность</p>
        <Input
          className={styles.inputs}
          required
          type='text'
          name='teachingSubject'
          placeholder='например: кыргызский язык'
        />
      </label>
      <div className={styles.FormLabelContainer}>
        <label className={styles.FormLabel}>
          <p className={styles.textP}>Занятость</p>
          <Select />
        </label>

        <label className={styles.FormLabel}>
          <p className={styles.textP}>График работы</p>
          <Select placeholder='Выберите...' />
        </label>
      </div>

      <div className={styles.ContactInfo}>
        <label>
          <p className={styles.textP}>Телефон</p>
          <Input
            className={styles.inputs}
            required
            type='tel'
            id='phone'
            name='phone'
            placeholder='Введите номер телефона...'
          />
        </label>

        <label>
          <p className={styles.textP}>Почта</p>
          <Input
            className={styles.inputs}
            required
            type='email'
            name='email'
            placeholder='Введите адрес электронной почты...'
          />
        </label>
      </div>
      <div className={styles.FormRow}>
        <label className={styles.FormLabel}>
          <p className={styles.textP}>Образование</p>
          <Select options={educationOptions} placeholder='Выберите...' />
        </label>

        <label>
          <p className={styles.textP}>Область</p>
          <Select placeholder='Выберите...' />
        </label>
      </div>

      <div className={styles.FormRow}>
        <label className={styles.FormLabel}>
          <p className={styles.textP}>Регион или город проживание</p>
          <Select className={styles.FormSelect} placeholder='Введите город...' />
        </label>

        <label className={styles.FormLabel}>
          <p className={styles.textP}>Возможность переезда</p>
          <Select className={styles.FormSelect} placeholder='Выберите...' />
        </label>
      </div>
      <div className={styles.MiddleContainer}>
        <label>
          <p className={styles.textP}>Семейное положение</p>
          <Select className={styles.FormSelect} placeholder='Выберите...' />
        </label>

        <label className={styles.FormLabel}>
          <p className={styles.textP}>Готовность к командировке</p>
          <Select placeholder='Выберите...' className={styles.FormSelect} />
        </label>
      </div>
    </div>
  );
};

export default PersonalInformation;
