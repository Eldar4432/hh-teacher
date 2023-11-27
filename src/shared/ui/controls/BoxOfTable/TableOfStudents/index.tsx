import React from 'react';
import style from './tableOfStudents.module.scss';
import { Box } from '~shared/ui';

const TableOfStudents = () => {
  return (
    <Box>
      <h1>Студенты</h1>

      <div className={style.blockThree}>
        <div className={style.blockThreeFlex}>
          <div className={style.one}>
            <li>№</li>
          </div>
          <div className={style.fullName}>
            <li>ФИО</li>
          </div>
          <div className={style.dateBirthday}>
            <li>Дата рождения</li>
          </div>
          <div className={style.cipher}>
            <li>Шифр</li>
          </div>
          <div className={style.well}>
            <li>Курс</li>
          </div>
        </div>

        <div className={style.blockThreeFlex}>
          <div className={style.one}>
            <li>1</li>
          </div>
          <div className={style.fullName}>
            <li>Асанов Асан Асанович</li>
          </div>
          <div className={style.dateBirthday}>
            <li>03.12.1993</li>
          </div>
          <div className={style.cipher}>
            <li>123456789</li>
          </div>
          <div className={style.well}>
            <li>1</li>
          </div>
        </div>

        <div className={style.blockThreeFlex}>
          <div className={style.one}>
            <li>1</li>
          </div>
          <div className={style.fullName}>
            <li>Асанов Асан Асанович</li>
          </div>
          <div className={style.dateBirthday}>
            <li>03.12.1993</li>
          </div>
          <div className={style.cipher}>
            <li>123456789</li>
          </div>
          <div className={style.well}>
            <li>1</li>
          </div>
        </div>

        <div className={style.blockThreeFlex}>
          <div className={style.one}>
            <li>1</li>
          </div>
          <div className={style.fullName}>
            <li>Асанов Асан Асанович</li>
          </div>
          <div className={style.dateBirthday}>
            <li>03.12.1993</li>
          </div>
          <div className={style.cipher}>
            <li>123456789</li>
          </div>
          <div className={style.well}>
            <li>1</li>
          </div>
        </div>

        <div className={style.blockThreeFlex}>
          <div className={style.one}>
            <li>1</li>
          </div>
          <div className={style.fullName}>
            <li>Асанов Асан Асанович</li>
          </div>
          <div className={style.dateBirthday}>
            <li>03.12.1993</li>
          </div>
          <div className={style.cipher}>
            <li>123456789</li>
          </div>
          <div className={style.well}>
            <li>1</li>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default TableOfStudents;