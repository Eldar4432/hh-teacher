import { useEffect, useRef } from 'react';
// import { Route, Routes, useLocation } from 'react-router-dom';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { RoutesUrls } from '~shared/lib/router';
import { RequireAuth } from '~shared/lib/auth';
// import { useSignCheck } from '~/shared/lib/auth/hooks/useSignCheck';
// import { signCheck as checkApi } from '~/features/auth/sign-check';

import { BaseLayout } from '~pages/layouts';
import { LoginPage } from '~pages/login';
import { NotFoundPage } from '~pages/not-found';
import { LogoutPage } from '~pages/logout';
import { HomePage } from '~pages/home';
import { SettingsPage } from '~pages/settings';
import { TablePage } from '~pages/businessTrips';
import EmployersPage from '~pages/employers/ui/EmployersPage/EmployersPage';

export const redirectUrl = RoutesUrls.login;

// const EmptyPage: React.FC<ComponentWithChild> = ({ children }) => <p>{children}</p>;

const createProtectedElement = (component: JSX.Element) => (
  <RequireAuth loginPath={RoutesUrls.login}>{component}</RequireAuth>
);

export const Router = () => {
  const location = useLocation();
  const effectCalled = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    // only execute the effect first time around
    if (!effectCalled.current) {
      // checkSuccessHandler();
      navigate(RoutesUrls.employees);
      effectCalled.current = true;
    }
  }, [navigate]);

  return (
    <Routes location={location} key={RoutesUrls.login}>
      <Route path={RoutesUrls.login} element={<LoginPage />} />

      {/* <Route path={RoutesUrls.root}> */}
      <Route path={RoutesUrls.root} element={createProtectedElement(<BaseLayout />)}>
        {/* <Route index element={<EmptyPage>Index page</EmptyPage>} /> */}
        <Route path={RoutesUrls.settings} element={<SettingsPage />} />
        <Route path={RoutesUrls.logout} element={<LogoutPage />} />
        <Route path={RoutesUrls.notFound} element={<NotFoundPage />} />
        <Route path={RoutesUrls.businessTrips} element={<TablePage />} />
        <Route path={RoutesUrls.employees} element={<EmployersPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
