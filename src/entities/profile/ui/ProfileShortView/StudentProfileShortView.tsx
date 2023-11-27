import { FC } from 'react';

import { Avatar, Box } from '~shared/ui';
import { useTranslation } from '~shared/lib/i18n/i18n';

import styles from './student.module.scss';

export interface StudentProfileProps {
  photo: any;
  fio: string;
  role: number;
  faculty: string;
  speciality: string;
  gpa: number;
}

export const StudentProfileView: FC<StudentProfileProps> = ({
  photo,
  fio,
  role,
  faculty,
  speciality,
  gpa,
}) => {
  const { t } = useTranslation();

  return (
    <Box background="var(--gr)">
      <div className={styles.wrapper}>
        <div className={styles.ava_fio}>
          <div>
            <Avatar src={photo} size={140} />
          </div>
          <div className={styles.fio}>
            <h3 className={styles.title}>{fio}</h3>
            <p className={styles.lebel}>
              {role === 1 ? t('cm:role.teacher') : t('cm:role.student')}
            </p>
          </div>
        </div>
        <div className={styles.fac_spec_gpa}>
          <div className={styles.faculty}>
            <h3 className={styles.title}>{faculty}</h3>
            <p className={styles.lebel}>{t('profile:faculty')}</p>
          </div>
          <div className={styles.speciality}>
            <h3 className={styles.title}>{speciality}</h3>
            <p className={styles.lebel}>{t('profile:speciality')}</p>
          </div>
          <div className={styles.gpa}>
            <p className={styles.lebel}>GPA</p>
            <h3 className={styles.title}>{gpa}</h3>
          </div>
        </div>
      </div>
    </Box>
  );
};
