import React from 'react';
import Select from 'react-select';
import { i18n, useTranslation } from '~shared/lib/i18n';
import { Box } from '~shared/ui';
import { LocaleCodes } from '../../model';
import styles from './style.module.scss';

export interface SetLocaleSimpleViewProps {}

const languageOptions = [
  { label: 'Кырг', value: LocaleCodes.KYRGYZ },
  { label: 'Рус', value: LocaleCodes.RUSSIAN },
  { label: 'Eng', value: LocaleCodes.ENGLISH },
];

const SetLocaleSimpleView: React.FC<SetLocaleSimpleViewProps> = () => {
  const { t } = useTranslation();

  const handleLocaleChange = (selectedOption: any) => {
    i18n.changeLanguage(selectedOption.value);
  };

  return (
    <Box>
      <div className={styles.lang}>
        <Select
          options={languageOptions}
          value={languageOptions.find((option) => option.value === i18n.language)}
          onChange={handleLocaleChange}
          isSearchable={false}
          className={styles.languageSelect}
        />
      </div>
    </Box>
  );
};

export default SetLocaleSimpleView;


 