import { useAtom } from 'jotai';
import { FC, lazy, useEffect } from 'react';
import Select from 'react-select';

import { Helmet } from 'react-helmet-async';
import { Button } from '~shared/ui';
import { useUser } from '~entities/user';
import { getPersonal } from '~entities/employers/api';
import { dataAtom } from '~entities/employers/model';
import { i18n } from '~shared/lib/i18n';
import styles from './Main.module.css';

export interface MainProps {}

const AdminTablePage = lazy(() =>
  import('./admin').then(module => ({ default: module.AdminTablePage }))
);

const UserTablePage = lazy(() =>
  import('./user').then(module => ({ default: module.UserTablePage }))
);

export const EmployersPage: FC<MainProps> = () => {
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
        <h1 className={styles.heroH1}>{t('heroH1')}</h1>
        <p className={styles.heroText}>{t('heroUnderH1')} </p>
        <label className={styles.FormLabel}>
          Регион или город проживания:
          <Select
            // value={cityOptions.find(
            //   (option) => option.value === formData.city
            // )}
            // onChange={(selectedOption) =>
            //   handleCityChange(selectedOption.value)
            // }
            className={styles.FormSelect}
            placeholder={t('placeholder')}
            isSearchable
          />
        </label>{' '}
        <Button className={styles.heroButton} type='link' href='/jobs'>
          {t('findJob')}
        </Button>
      </div>

      <div className={styles.flexContainer}>
        <img className={styles.imgHero} src='http://localhost:3001/your-repo-name/static/media/8600.5565ec2a973bac680b70.jpg' alt='Build Website' />
      </div>
    </div>
  );
};
