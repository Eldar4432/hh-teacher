import { useAtom } from 'jotai';
import { lazy, useEffect } from 'react';

import { Helmet } from 'react-helmet-async';

import { useUser } from '~entities/user';
import { getStructure } from '~pages/structure/api';
import { dataAtom } from '~pages/structure/lib';
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

  useEffect(() => {
    setData(getStructure());
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('cm:pages.structure')}</title>
      </Helmet>
      {user?.type === 1 ? <AdminTablePage data={data} /> : <UserTablePage data={data} />}
    </>
  );
};
