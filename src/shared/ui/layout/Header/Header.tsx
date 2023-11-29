import { FC } from 'react';
import classNames from 'classnames';

import { Burger } from '~entities/burger';
import { LocaleDropdown } from '~features/locale/locale-dropdown'
import useScrollListener from '~shared/lib/hooks/useScrollListener';

import styles from './header.module.scss';
import { SetLocaleSimpleView } from '~features';

interface HeaderProps {
  children?: string;
}

export const Header: FC<HeaderProps> = ({ children }) => {
  const scroll = useScrollListener();

  const headerClass = classNames(
    styles.Header,
    scroll.y > 150 && scroll.y - scroll.lastY > 0 ? styles.hidden : ''
  );

  return (
    <div className={headerClass}>
      <Burger />
      <div className={styles.title}>{children}</div>
      <SetLocaleSimpleView />
    </div>
  );
};
