import { FC } from 'react';

import { Document, Font, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
    paddingTop: 35,
    paddingBottom: 65,
    fontFamily: 'Roboto',
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  upperText: {
    textAlign: 'right',
  },
  text: {
    textAlign: 'left',
    textIndent: 20,
    marginTop: 16,
    fontSize: 16,
  },
  textCenter: {
    textAlign: 'center',
  },
  orgs: {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orgsElement: {
    marginLeft: 50,
    // textIndent: 3,
  },
});

export const ReportPDF: FC<{ data: any }> = ({ data }) => {
  const { startDate, endDate, city, country, btName, organizators } = data;

  const sDate = new Date(startDate).toLocaleDateString();
  const eDate = new Date(endDate).toLocaleDateString();

  // const orgs = organizators.map((org: string, idx: number) => {
  //   return <li key={idx}>{org}</li>;
  // });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.upperText}>
            Форма "Отчет по итогам заграничной служебной командировки/ <br />
            участия в международном мероприятии"
          </Text>
          <Text style={styles.upperText}>
            Министерство иностранных дел <br />
            Кыргызской республики
          </Text>
          <Text style={styles.title}>Отчет</Text>
          <Text style={styles.textCenter}>
            по итогам заграничной служебной командировки <br />
            участия в международном мероприятии
          </Text>
          <Text style={styles.text}>
            Cooбщаем, что с {sDate} по {eDate} в г. {city}, {country} состоялось {btName}
          </Text>
          <Text style={styles.orgs}>
            Организаторами мероприятии являются:{'  '}
            <br />
            {organizators?.map((org: string, idx: number) => (
              <Text key={idx} style={styles.orgsElement}>
                {idx + 1}. {org}
              </Text>
            ))}
          </Text>
          <Text style={styles.text}>
            От кыргызской стороны планируется участие в мероприятии следующих должностных лиц:
          </Text>
          <Text style={styles.text}>
            Оcновные цели и задачи мероприятия, заявленные организаторами:
          </Text>
          <Text style={styles.text}>Цели и задачт Кыргызской стороны:</Text>
          <Text style={styles.text}>Повестка дня мероприятия включает следующие вопросы:</Text>
          <Text style={styles.text}>
            Позиция Кыргызской стороны по каждому вопросу повестки дня заключается в следующем:
          </Text>
          <Text style={styles.text}>
            Позиция Кыргызской стороны по каждому вопросу повестки дня заключается в следующем:
          </Text>
          <Text style={styles.text}>
            Указанная позиция кыргызской стороны по каждому вопросу повестки дня была одобренна
            следующими государственными органами/должностными лицами:
          </Text>
          <Text style={styles.text}>
            В ходе мероприятии планируются выступления/заявления кыргызской стороны по следующим
            вопорсам/темам:
          </Text>
          <Text style={styles.text}>
            В ходе мероприятия кыргызской стороны планируется внести предложения по следующим
            вопросам:
          </Text>
          <Text style={styles.text}>
            По итогам мероприятия планируется принятие/подписание следующих итоговых документов:
          </Text>
          <Text style={styles.text}>
            Проекты международных( в том числе межведомственных) договоров одобрены следующими
            решениями Президента Кыргызской Республики/ Правительства Кыргызской Республики:
          </Text>
          <Text style={styles.text}>
            Итоговыми документами предусматриваются следующие обязательства Кыргызской стороны:
          </Text>
          <Text style={styles.text}>
            Проекты итоговых документов согласованы со следующими государственными органами
            Кыргызской Республики:
          </Text>
          <Text style={styles.text}>
            Ожидаются следующие результаты от участия кыргызской стороны в мероприятии:
          </Text>
          <Text style={styles.text}>Расходы по участию покрываются за счет:</Text>
          <Text style={styles.text}>
            Отчет по итогам участия в мероприятии будет направлен в МИД КР в течении 14 календарных
            дней после приезда/завершения.
          </Text>
        </View>
      </Page>
    </Document>
  );
};
