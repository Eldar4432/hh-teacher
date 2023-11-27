import React from 'react';
import { Box } from '~shared/ui';
import style from './TableOfItems.module.scss';

const TableOfItems = () => {
  return (
    <Box>
      <div className={style.h1}>Предметы</div>
      <div className={style.blockTwoFlex}>
        <div className={style.oneTwo}>
          <li className={style.nameOfLi}>№</li>
        </div>
        <div className={style.Subject}>
          <li className={style.nameOfLi}>Наименование</li>
        </div>
      </div>

      <div className={style.blockTwoFlex}>
        <div className={style.oneTwo}>
          <li>1</li>
        </div>
        <div className={style.Subject}>
          <li>Анатомия</li>
        </div>
      </div>

      <div className={style.blockTwoFlex}>
        <div className={style.oneTwo}>
          <li>2</li>
        </div>
        <div className={style.Subject}>
          <li>Массаж</li>
        </div>
      </div>

      <div className={style.blockTwoFlex}>
        <div className={style.oneTwo}>
          <li>3</li>
        </div>
        <div className={style.Subject}>
          <li>Физиология</li>
        </div>
      </div>
    </Box>
  );
};

export default TableOfItems;
