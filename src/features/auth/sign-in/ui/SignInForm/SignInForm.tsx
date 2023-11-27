import { ReactNode, useState } from 'react';

import { useSignIn } from '~shared/lib/auth';
import { Button, Input, Logo } from '~shared/ui';
import { UserIcon } from '~shared/ui/Icons/icons';
import { useTranslation } from '~shared/lib/i18n';

import { signIn } from '../../api';
import { SignInData } from '../../model';

import styles from './style.module.scss';

export interface SignInFormProps {
  onSignIn: (payload: SignInData) => void;
  formId?: string;
  langSlot?: ReactNode;
}

export const SignInForm: React.FC<SignInFormProps> = ({
  onSignIn,
  langSlot,
  formId = 'form:sign-in',
}) => {
  const authSignIn = useSignIn();
  const { t, i18n } = useTranslation();
  const [message, setMessage] = useState('');
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit =
    // const handleSubmit = useCallback(
    (event: any) => {
      event.preventDefault();

      // mockSignIn(payload).then(({ data }) => {

      signIn({ email: login, password: pass })
        .then(({ data, error, message }) => {
          console.error({ data, error, message });

          if (error && data === false) {
            console.error(message);
            setMessage(t('auth:passwordError') || '111111Неправильный логин или пароль!');

            return;
          }

          if (
            authSignIn({
              token: data.token,
              expiresIn: data.expiresIn,
              tokenType: data.tokenType,
            })
          ) {
            onSignIn(data);
            setMessage('');
          }
        })
        .catch((err) => {
          console.error(err);
        });
    };
  //   },
  //   [onSignIn, authSignIn]
  // );

  return (
    <div className={styles.bg}>
      <div className={styles.wrapper}>
        <form id={formId} onSubmit={handleSubmit} noValidate className={styles.form}>
          <h2 className={styles.welcome}>{t('auth:welcome')}</h2>
          <Logo type="primary" lang={i18n.language} />
          <h2 className={styles.vuzname}>{t('auth:university')}</h2>
          <div className={styles.inputsWrapper}>
            <Input
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              name="login"
              className="lmsInputSignIn"
              suffix={<UserIcon />}
              placeholder={t('auth:loginPlaceholder') || 'Логин'}
            />

            <Input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              name="password"
              className="lmsInputSignIn"
              type="password"
              placeholder={t('auth:passwordPlaceholder') || 'Пароль'}
            />
            {message && <div className={styles.errMessage}>{message}</div>}
          </div>

          <Button htmlType="submit" shape="default" prefixCls="SignInButton">
            {t('auth:buttons.signIn')}
          </Button>
          {langSlot}
        </form>

        <div className={styles.circleTopRight}></div>
        <div className={styles.circleBottomLeft1}></div>
        <div className={styles.circleBottomLeft2}></div>
      </div>
    </div>
  );
};
