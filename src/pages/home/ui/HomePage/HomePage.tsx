import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

import { i18n } from '~shared/lib/i18n';

export interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
  const { t } = i18n;

  return (
    <>
      <Helmet>
        <title>{t('cm:pages.home')}</title>
      </Helmet>
      <div>Home page</div>
    </>
  );
};
