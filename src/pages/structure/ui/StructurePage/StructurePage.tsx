import { useAtom } from 'jotai';
import { lazy, useEffect } from 'react';

import { Helmet } from 'react-helmet-async';

import { dataAtom, getDepartment } from '~entities/department';

import { useUser } from '~entities/user';
import { i18n } from '~shared/lib/i18n';

const AdminTablePage = lazy(() =>
  import('./admin').then((module) => ({ default: module.AdminTablePage }))
);

const UserTablePage = lazy(() =>
  import('./user').then((module) => ({ default: module.UserTablePage }))
);

export const StructurePage = () => {
  const user = useUser();
  const { t } = i18n;

  const [data, setData] = useAtom(dataAtom);

  const handleDepartment = () => {
    setData(getDepartment());
  };

  useEffect(() => {
    handleDepartment();
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('cm:pages.structure')}</title>
      </Helmet>
      {user?.type === 1 ? (
        <AdminTablePage data={data} handleDepartment={handleDepartment} />
      ) : (
        <UserTablePage data={data} />
      )}
    </>
  );
};
