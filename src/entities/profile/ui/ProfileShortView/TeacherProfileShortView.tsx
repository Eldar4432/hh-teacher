import { FC } from 'react';

import { Avatar, Box, SN } from '~shared/ui';
import { useTranslation } from '~shared/lib/i18n/i18n';
import { User } from '~entities/user';

import styles from './teacher.module.scss';

export interface TeacherProfileProps {
  fio: string;
  role: number;
  kafedra: string;
  photo: any;
  user: User;
}

export const TeacherProfileView: FC<TeacherProfileProps> = ({
  photo,
  fio,
  role,
  kafedra,
  user,
}) => {
  const { t } = useTranslation();

  return (
    <Box background="var(--gr)">
      <div className="flex gap-6 items-center md:gap-5 sm:flex-col  sm:items-start">
        <div>
          <Avatar src={photo} size={140}>
            <SN surname={user?.s} name={user?.n} size={48} />
          </Avatar>
        </div>
        <div className={styles.fio}>
          <h3 className={styles.title}>{fio}</h3>
          <p className={styles.lebel}>{role === 1 ? t('cm:role.teacher') : t('cm:role.student')}</p>
        </div>
        <div className={styles.kafedra}>
          <h3 className={styles.title}>{kafedra}</h3>
          <p className={styles.lebel}>{t('profile:kafedra')}</p>
        </div>
      </div>
    </Box>
  );
};
