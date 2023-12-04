// import { useAtom } from 'jotai';
import { FC, lazy, useEffect } from 'react';

import { Helmet } from 'react-helmet-async';

import { useUser } from '~entities/user';
// import { getPersonal } from '~pages/employers/api';
// import { dataAtom } from '~pages/employers/lib';
import { i18n } from '~shared/lib/i18n';

export interface EmployersPageProps {}

const AdminTablePage = lazy(() =>
  import('./admin').then((module) => ({ default: module.AdminTablePage }))
);

const UserTablePage = lazy(() =>
  import('./user').then((module) => ({ default: module.UserTablePage }))
);

const data: any = [
  {
    id: '1',
    name: 'Tamara',
    pin: 12202200250025,
    birthDate: '22.02.2002',
    active: false,
  },
];

export const EmployersPage: FC<EmployersPageProps> = () => {
  const user = useUser();
  const { t } = i18n;

  // const [data, setData] = useAtom(dataAtom);

  useEffect(() => {
    // setData(getPersonal());
    console.log(data);
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('cm:pages.employers')}</title>
      </Helmet>
      {user?.type === 1 ? <AdminTablePage data={data} /> : <UserTablePage data={data} />}
    </>
  );
};
