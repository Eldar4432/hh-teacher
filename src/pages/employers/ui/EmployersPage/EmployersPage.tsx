import { useAtom } from 'jotai';
import { FC, lazy, useEffect } from 'react';

import { Helmet } from 'react-helmet-async';
import { Select, Button } from 'antd';
import { useUser } from '~entities/user';
import { getPersonal } from '~entities/employers/api';
import { dataAtom } from '~entities/employers/model';
import { i18n } from '~shared/lib/i18n';
import styles from './Main.module.css';
import BuildWebsite from '../../../../shared/assets/8600.jpg';

export interface EmployersPage {}

const AdminTablePage = lazy(() =>
  import('./admin').then(module => ({ default: module.AdminTablePage }))
);

const UserTablePage = lazy(() =>
  import('./user').then(module => ({ default: module.UserTablePage }))
);

export const EmployersPage: FC<EmployersPage> = () => {
  const { Option } = Select;
  const user = useUser();
  const { t } = i18n;

  const [data, setData] = useAtom(dataAtom);

  const handleUsers = () => {
    setData(getPersonal());
  };

  useEffect(() => {
    handleUsers();
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.heroContainer}>
        <h1 className={styles.heroH1}>Поиск Резервных Учителей</h1>
        <p className={styles.heroText}>
          При Министерстве Образования и Науки Кыргызской Республики
        </p>
        <label className={styles.FormLabel}>
          Регион или город проживания:
          <Select className={styles.FormSelect} placeholder={t('placeholder')} showSearch>
            {/* Пример Option */}
            <Option value='option1'>Option 1</Option>
            <Option value='option2'>Option 2</Option>
          </Select>
        </label>{' '}
        <Button className={styles.heroButton} type='link' href='/jobs'>
          Найти работу{' '}
        </Button>
      </div>

      <div className={styles.flexContainer}>
        <img className={styles.imgHero} src={BuildWebsite} alt='Build Website' />
      </div>
    </div>
  );
};
