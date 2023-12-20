import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { useAtom } from 'jotai';
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

import { reportAtom } from '~entities/reports';
import { ReportInfo, ReportPDF } from '~features/reports';

import { i18n } from '~shared/lib/i18n';
import { Button } from '~shared/ui';

export interface TablePageProps {}

export const ReportsPage: FC<TablePageProps> = () => {
  // const user = useUser();
  const { t } = i18n;

  const [data, setData] = useAtom(reportAtom);

  const handleChange = (e: any) => {
    const name = e.target.name;
    const type = e.target.type;

    const value = type === 'checkbox' ? e.target.checked : e.target.value;

    setData((prevState: any) => ({ ...prevState, [name]: value }));
  };

  const resetOrgs = (e: any) => {
    e.preventDefault();
    setData((prevState: any) => ({ ...prevState, organizators: [] }));
  };

  const addOrg = (e: any, detail: string) => {
    const name = e.target.name;

    setData((prevState: any) => ({
      ...prevState,
      [name]: [...prevState.organizators, detail],
    }));
  };

  const { ...otherProps } = data;
  const canSave = [...Object.values(otherProps), data.organizators.length].every(Boolean);

  return (
    <>
      <Helmet>
        <title>{t('cm:pages.reports')}</title>
      </Helmet>
      <ReportInfo data={data} handleChange={handleChange} reset={resetOrgs} addOrg={addOrg} />
      <div className={!canSave ? 'hidden' : 'm-auto'}>
        <PDFDownloadLink document={<ReportPDF data={data} />} fileName={`${data.docName}.pdf`}>
          <Button>Скачать отчет</Button>
        </PDFDownloadLink>
      </div>
      <PDFViewer width={800} height={1000}>
        <ReportPDF data={data} />
      </PDFViewer>
    </>
  );
};
