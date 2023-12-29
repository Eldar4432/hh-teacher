// import { ReactNode, useState } from 'react';

// import { Button, Input } from '~shared/ui';
// import { useTranslation } from '~shared/lib/i18n';

// import { signIn } from '../../api';
// import { SignInData } from '../../model';

// import styles from './style.module.scss';

// export interface SignInFormProps {
//   onSignIn: (payload: SignInData) => void;
//   formId?: string;
//   langSlot?: ReactNode;
// }

// export const SignInForm: React.FC<SignInFormProps> = ({
//   onSignIn,
//   langSlot,
//   formId = 'form:sign-in',
// }) => {
//   const { t } = useTranslation();
//   const [message, setMessage] = useState('');
//   const [log, setLogin] = useState('');
//   const [pass, setPass] = useState('');

//   const handleSubmit =
//     // const handleSubmit = useCallback(
//     (event: any) => {
//       event.preventDefault();

//       // mockSignIn(payload).then(({ data }) => {

//       signIn({ login: log, password: pass })
//         .then(({ data, error, message }) => {
//           if (error && data === false) {
//             console.error(message);
//             setMessage(t('auth:passwordError') || 'Неправильный логин или пароль!');

//             return;
//           }

//           onSignIn(data);
//           setMessage('');
//         })
//         .catch((err) => {
//           console.error(err);
//         });
//     };

//   return (
//     <div className={styles.bg}>
//       <div className={styles.wrapper}>
//         <form id={formId} onSubmit={handleSubmit} noValidate className={styles.form}>
//           <div className={styles.inputsWrapper}>
//             <Input
//               value={log}
//               onChange={(e) => setLogin(e.target.value)}
//               name="login"
//               className="lmsInputSignIn"
//               placeholder={t('auth:loginPlaceholder') || 'Логин'}
//             />

//             <Input
//               value={pass}
//               onChange={(e) => setPass(e.target.value)}
//               name="password"
//               className="lmsInputSignIn"
//               type="password"
//               placeholder={t('auth:passwordPlaceholder') || 'Пароль'}
//             />
//             {message && <div className={styles.errMessage}>{message}</div>}
//           </div>

//           <Button htmlType="submit" shape="default" prefixCls="SignInButton">
//             {t('auth:buttons.signIn')}
//           </Button>
//           {langSlot}
//         </form>

//         <div className={styles.circleTopRight}></div>
//         <div className={styles.circleBottomLeft1}></div>
//         <div className={styles.circleBottomLeft2}></div>
//       </div>
//     </div>
//   );
// };

import { ReactNode, useState } from 'react';

import { Button, Input } from '~shared/ui';
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
  const { t } = useTranslation();
  const [message, setMessage] = useState('');
  const [log, setLogin] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit =
    // const handleSubmit = useCallback(
    (event: any) => {
      event.preventDefault();

      // mockSignIn(payload).then(({ data }) => {

      signIn({ login: log, password: pass })
        .then(({ data, error, message }) => {
          if (error && data === false) {
            console.error(message);
            setMessage(t('auth:passwordError') || 'Неправильный логин или пароль!');

            return;
          }

          onSignIn(data);
          setMessage('');
        })
        .catch(err => {
          console.error(err);
        });
    };

  // const { t } = useTranslation();

  const [action, setAction] = useState('Login');

  // const [formData, setFormData] = useState({
  //   name: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = () => {
  //   if (action === "Login") {
  //     console.log("Login:", formData);
  //   } else {
  //     console.log("Sign Up:", formData);
  //   }
  // };
  const [isLoginFocused, setIsLoginFocused] = useState(false);


  return (
    <div className={styles.login_container}>
      <div className={styles.login_header}>
        <div className={styles.login_text}>{action}</div>
        <div className={styles.login_underline}></div>
      </div>
      <div className={styles.login_inputs}>
        {action === 'Login' ? (
          <div></div>
        ) : (
          <div className={styles.login_input}>
            <input type='text' placeholder='Name' />
          </div>
        )}

        <div className={styles.login_input}>
          <input
            value={log}
            type='email'
            placeholder={t('auth:loginPlaceholder') || 'Логин'}
            onChange={e => setLogin(e.target.value)}
          />
        </div>

        <div className={styles.login_input}>
          <input
            value={pass}
            type='password'
            placeholder={t('auth:passwordPlaceholder') || 'Пароль'}
            onChange={e => setPass(e.target.value)}
          />
        </div>
        {message && <div className={styles.errMessage}>{message}</div>}
      </div>
      <div className={styles.login_submit_button_container}>
        <div className={styles.login_submit_button} onClick={handleSubmit}>
          {t('auth:buttons.signIn')}{' '}
        </div>
        {langSlot}
      </div>

      {action === 'Sign Up' ? (
        <div></div>
      ) : (
        <div className={styles.login_forgot_password}>
          {t('forgotLogin')} <span>{t('clickForgot')}</span>
        </div>
      )}

      <div className={styles.login_submit_container}>
        <div
          className={
            action === 'Login' ? `${styles.login_submit} ${styles.login_gray}` : styles.login_submit
          }
          onClick={() => {
            setAction('Sign Up');
          }}
        >
          Sign Up
        </div>
        <div
          className={
            action === 'Sign Up'
              ? `${styles.login_submit} ${styles.login_gray}`
              : styles.login_submit
          }
          onClick={() => {
            setAction('Login');
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};
