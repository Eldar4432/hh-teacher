import { FC, lazy } from 'react'
import { Helmet } from 'react-helmet-async';
import { useUser } from '~entities/user';
import { i18n } from '~shared/lib/i18n';



export interface EmployersPageProps {}

const data =[
    {
        id:1,
        name: "Tamara"
    }
]

const AdminTablePage = lazy(() =>
  import('./admin').then((module) => ({ default: module.AdminTablePage }))
);

const UserTablePage = lazy(() =>
  import('./user').then((module) => ({ default: module.UserTablePage }))
);

const EmployersPage: FC<EmployersPageProps> = () => {
    const user =useUser()
    const { t } = i18n;

  return (
    <>
        <Helmet>
            <title>{t('cm:pages.employees')}</title>
        </Helmet>
        {user?.type === 1 ? <AdminTablePage data={data}/> : <UserTablePage data={data} /> }
    </>
  )
}

export default EmployersPage