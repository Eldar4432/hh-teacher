import { FC, useState } from 'react';

import { Button, Input } from '~shared/ui';

const style = 'w-[300px] border border-solid border-[2px] p-[5px] my-[16px]';

export const ReportInfo: FC<{
  data: any;
  handleChange: (e: any) => void;
  reset: (e: any) => void;
  addOrg: (e: any, detail: any) => void;
}> = ({ data, handleChange, reset, addOrg }) => {
  const [detail, setDetail] = useState('');

  const detailChange = (e: any) => {
    setDetail(e.target.value);
  };

  const addOrgan = (e: any, detail: any) => {
    e.preventDefault();
    addOrg(e, detail);
    setDetail('');
    console.log(e);
  };

  const entries = Object.entries(data);
  const arrFiltered = entries.filter(([key, value]) => typeof value === 'object');
  const strFiltered = entries.filter(([key, value]) => typeof value === 'string');

  return (
    <>
      <form className="flex flex-wrap items-center justify-between my-[]">
        {strFiltered.map((element: any, idx: number) => (
          <input
            type="text"
            key={idx}
            name={element[0]}
            value={element[1]}
            className={style}
            placeholder={element[0]}
            onChange={handleChange}
          />
        ))}
        {arrFiltered.map((element: any, idx: number) => (
          <div className="flex flex-col" key={idx}>
            <Input
              type="text"
              placeholder={element[0]}
              className={style}
              value={detail}
              // name={element[0]}
              onChange={detailChange}
            />
            <div className="flex flex-row justify-between">
              <Button onClick={(e) => addOrgan(e, detail)} disabled={detail.trim() ? false : true}>
                Add
              </Button>
              <Button onClick={() => setDetail('')}>Очистить</Button>
            </div>
          </div>
        ))}
        <input
          type="text"
          placeholder="Название документа"
          name="docName"
          className={style}
          value={data.docName}
          onChange={handleChange}
        />
      </form>
    </>
  );
};
