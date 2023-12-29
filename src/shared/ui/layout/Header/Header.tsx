import { FC } from 'react';
import classNames from 'classnames';

import { Burger } from '~entities/burger';
import useScrollListener from '~shared/lib/hooks/useScrollListener';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

import styles from './header.module.scss';
import SetLocaleSimpleView from '~features/locale/set-locale/ui/SetLocaleSimpleView/SetLocaleSimpleView';
import { Button } from 'antd';

interface HeaderProps {
  children?: string;
}

export const Header: FC<HeaderProps> = ({ children }) => {
  const { t, i18n } = useTranslation();
  const scroll = useScrollListener();

  const headerClass = classNames(
    styles.Header,
    scroll.y > 150 && scroll.y - scroll.lastY > 0 ? styles.hidden : ''
  );

  return (
    <div className={headerClass}>
      <Burger />

      <ul className={styles.headerLinks}>
        <li>
          <Button className={`${styles.link} ${'' ? styles.activeLink : ''}`} type='link' href='/'>
            {t('home')}
          </Button>
        </li>
        <li>
          <Button
            className={`${styles.link} ${'/team' ? styles.activeLink : ''}`}
            type='link'
            href='/jobs'
          >
            Вакансии
          </Button>
        </li>
        <li>
          <Button className={`${styles.buttonHeader} ${styles.link}`} type='link' href='/resume'>
            Создать Резюме
          </Button>
        </li>
        <li>
          <Button className={`${styles.buttonHeader} ${styles.link}`} type='link' href='/login'>
            Войти
          </Button>
        </li>
      </ul>
      <SetLocaleSimpleView />
    </div>
  );
};
