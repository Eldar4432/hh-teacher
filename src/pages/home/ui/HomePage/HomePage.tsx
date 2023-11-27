import { FC, lazy } from 'react';
import { Helmet } from 'react-helmet-async';

import { i18n } from '~shared/lib/i18n';

import { useUser } from '~entities/user';

// import { TeacherHomePage } from './teacher';
// import { StudentHomePage } from './student';
const TeacherHomePage = lazy(() =>
  import('./teacher').then((module) => ({ default: module.TeacherHomePage }))
);

const StudentHomePage = lazy(() =>
  import('./student').then((module) => ({ default: module.StudentHomePage }))
);

export interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
  const user = useUser();
  const { t } = i18n;

  return (
    <>
      <Helmet>
        <title>{t('cm:pages.home')}</title>
      </Helmet>
      {user?.type === 1 ? <TeacherHomePage /> : <StudentHomePage />}
    </>
  );
};
