import { FC } from 'react';

import { Box, Typography } from '~shared/ui';
import { useTranslation } from '~shared/lib/i18n/i18n';

import styles from './profile.module.scss';

interface ProfileProps {
  fio: string;
  pol: string;
  bdate: string;
  Nationality: string;
  Citizenship: string;
  INN: string;
  phone_mobile: string;
  education: string;
}

export interface ProfileViewProps {
  profile: ProfileProps | null;
}

export const ProfileView: FC<ProfileViewProps> = ({ profile }) => {
  const { t } = useTranslation();

  return (
    <Box title={t('profile:title')} padding={0}>
      <div className={styles.profile}>
        <div className={styles.cell}>
          <Typography.Text type="secondary">{t('profile:fio')}</Typography.Text>
          <Typography.Title level={5}>{profile?.fio}</Typography.Title>
        </div>
        <div className={styles.cell}>
          <Typography.Text type="secondary">{t('profile:pol')}</Typography.Text>
          <Typography.Title level={5}>{profile?.pol}</Typography.Title>
        </div>
        <div className={styles.cell}>
          <Typography.Text type="secondary">{t('profile:bdate')}</Typography.Text>
          <Typography.Title level={5}>{profile?.bdate}</Typography.Title>
        </div>
        <div className={styles.cell}>
          <Typography.Text type="secondary">{t('profile:nationality')}</Typography.Text>
          <Typography.Title level={5}>{profile?.Nationality}</Typography.Title>
        </div>
        <div className={styles.cell}>
          <Typography.Text type="secondary">{t('profile:citizenship')}</Typography.Text>
          <Typography.Title level={5}>{profile?.Citizenship}</Typography.Title>
        </div>
        <div className={styles.cell}>
          <Typography.Text type="secondary">{t('profile:INN')}</Typography.Text>
          <Typography.Title level={5}>{profile?.INN}</Typography.Title>
        </div>
        <div className={styles.cell}>
          <Typography.Text type="secondary">{t('profile:phone_mobile')}</Typography.Text>
          <Typography.Title level={5}>{profile?.phone_mobile}</Typography.Title>
        </div>
        <div className={styles.cell}>
          <Typography.Text type="secondary">{t('profile:education')}</Typography.Text>
          <Typography.Title level={5}>{profile?.education}</Typography.Title>
        </div>
      </div>
    </Box>
  );
};
