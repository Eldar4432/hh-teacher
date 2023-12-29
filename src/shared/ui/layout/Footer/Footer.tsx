import React, { FC } from 'react';
import classNames from 'classnames';
import { Button } from 'antd';
import { Burger } from '~entities/burger';
import useScrollListener from '~shared/lib/hooks/useScrollListener';
import styles from './footer.module.scss';

interface FooterProps {
  children?: string;
}

const Footer: FC<FooterProps> = ({ children }) => {
  const scroll = useScrollListener();
  const isScrolledDown = scroll.y > 150 && scroll.y - scroll.lastY > 0;

  const containerClass = classNames(styles.container, {
    [styles.hidden]: isScrolledDown,
  });

  return (
    <div className={styles.footer}>
      <div className={containerClass}>
        <div className={styles.containerFlax}>
          <div className={styles.brandIconContainer}>
            <Burger />
            <p className={styles.brandText}>
              Министерство образования
              <br />и науки КР
            </p>
          </div>
          <div className={styles.contactInfo}>
            <h1 className={styles.sectionTitle}>Связаться</h1>
            <p className={styles.infoText}>aibekov4432@gmail.com</p>
            <p className={styles.infoText}>Кыргызстан, Бишкек</p>
          </div>
          <div className={styles.socialMedia}>
            <h1 className={styles.socialMediaTitle}>Соц.сети</h1>
            <Button
              href='https://www.instagram.com'
              type='link'
              target='_blank'
              className={styles.socialMediaLink}
            >
              Instagram
            </Button>
          </div>
        </div>
        <div className={styles.madeByText}>
          <p>Бишкек 2023 - Все права защищены - МОН</p>
          <p>Made by&nbsp;</p>
          <Button
            href='https://github.com/Eldar4432'
            type='link'
            target='_blank'
            className={styles.madeByLink}
          >
            Eldar Aibekov
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
