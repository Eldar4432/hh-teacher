import { FC } from 'react';

import { Select, SelectProps, Typography } from '~shared/ui';

interface YearItemProps {
  label: string;
  value: number;
}

export interface YearSelectorProps extends SelectProps {
  onYearSelect: Function;
  year: number;
  yearList: YearItemProps[];
  minWidth?: number;
  width?: '100%' | 'auto';
}

export const YearSelector: FC<YearSelectorProps> = ({ onYearSelect, year, yearList, ...props }) => {
  return (
    <div>
      <Typography style={{ fontSize: 14 }} color="text.primary">
        entity.year.select.title
      </Typography>
      <Select
        id="year-select"
        value={year}
        options={yearList}
        {...props}
        onChange={(val) => onYearSelect(val)}
      />
    </div>
  );
};
