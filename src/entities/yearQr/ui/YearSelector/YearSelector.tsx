import { FC } from 'react';

import { Labeled, Select, SelectProps } from '~shared/ui';
import { useTranslation } from '~shared/lib/i18n/i18n';

interface ItemProps {
  label: string;
  value: number;
}

export interface YearSelectorProps extends SelectProps {
  onYearSelect: Function;
  year: number;
  yearList: ItemProps[];
}

export const YearSelector: FC<YearSelectorProps> = ({ onYearSelect, year, yearList, ...props }) => {
  const { t } = useTranslation();

  return (
    <Labeled label={t('shared.AcademYear')}>
      <Select
        id="year-select"
        value={year}
        options={yearList}
        {...props}
        placeholder={t('actions.select')}
        onChange={(val) => onYearSelect(val)}
      />
    </Labeled>
  );
};
