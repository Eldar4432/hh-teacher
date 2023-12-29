import { useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { i18n } from '~shared/lib/i18n';
import { Navigate, RoutesUrls, useNavigate } from '~shared/lib/router';
import { SignInForm, SignInFormProps } from '~features/auth';

import { useSetUser, useUser } from '~entities/user';

import { LoginLayout } from '../../../layouts';

export interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = () => {
  const navigate = useNavigate();
  const setUser = useSetUser();
  const user = useUser();
  const { t } = i18n;

  const handleSignIn: SignInFormProps['onSignIn'] = useCallback(
    ({ authState }) => {
      // LocalStorageCache.flush();

      setUser({ authState }).then(() => {
        navigate(RoutesUrls.employers, { replace: true });
      });
    },
    [navigate, setUser]
  );

  if (user) {
    return <Navigate to={RoutesUrls.employers} replace />;
  }

  return (
    <LoginLayout>
      <Helmet>
        <title>{t('cm:pages.login')}</title>
      </Helmet>
      <SignInForm onSignIn={handleSignIn} />
    </LoginLayout>
  );
};
