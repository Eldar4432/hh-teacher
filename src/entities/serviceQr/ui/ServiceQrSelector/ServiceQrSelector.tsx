import { FC } from 'react';

import { Labeled, Select, SelectProps } from '~shared/ui';
import { useTranslation } from '~shared/lib/i18n/i18n';

interface ItemProps {
  label: string;
  value: number;
}

export interface ServiceQrSelectorProps extends SelectProps {
  onServiceSelect: Function;
  service: number | null;
  serviceList: ItemProps[];
}

export const ServiceQrSelector: FC<ServiceQrSelectorProps> = ({
  onServiceSelect,
  service,
  serviceList,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <Labeled label={t('shared.service')}>
      <Select
        id="service-select"
        value={service}
        options={serviceList}
        {...props}
        placeholder={t('actions.select')}
        onChange={(val) => onServiceSelect(val)}
      />
    </Labeled>
  );
};
