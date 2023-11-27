import { Box } from '~shared/ui';
import { ProfileShort } from '~widgets/profile';

import style from './teacher.module.scss';

export const TeacherHomePage = () => {
  return (
    <>
      <ProfileShort />
      <div className={style.teacherContainer}>
        <div>
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
        </div>
        <div>
          <Box>
            <div className={style.blockTwoStatus}>
              <h1>Тесты</h1>
              <h1>Status</h1>
            </div>
            <div className={style.blockTwoFlex}>
              <div className={style.oneTwo}>
                <li className={style.nameOfLi}>№</li>
              </div>
              <div className={style.Subject}>
                <li className={style.nameOfLi}>Наименование</li>
              </div>
              <div className={style.status}>
                <li>Запущен</li>
              </div>
            </div>

            <div className={style.blockTwoFlex}>
              <div className={style.oneTwo}>
                <li>1</li>
              </div>
              <div className={style.Subject}>
                <li>Анатомия</li>
              </div>
              <div className={style.status}>
                <li>Запущен</li>
              </div>
            </div>

            <div className={style.blockTwoFlex}>
              <div className={style.oneTwo}>
                <li>2</li>
              </div>
              <div className={style.Subject}>
                <li>Массаж</li>
              </div>
              <div className={style.status}>
                <li>Запущен</li>
              </div>
            </div>

            <div className={style.blockTwoFlex}>
              <div className={style.oneTwo}>
                <li>3</li>
              </div>
              <div className={style.Subject}>
                <li>Физиология</li>
              </div>
              <div className={style.status}>
                <li>Запущен</li>
              </div>
            </div>
          </Box>
        </div>
      </div>

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
    </>
  );
};
