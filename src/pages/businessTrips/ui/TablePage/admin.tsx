import { FC, useEffect, useState } from 'react';

import { Space, Table } from 'antd';
import { atom, useAtom } from 'jotai';

import { AddModalBusinessTrip } from '~widgets/add-modal';
import { Filter } from '~widgets/filter';
import { deleteBusinessTrip } from '~entities/businessTrip';

const visAtom = atom(false);

export const AdminTablePage: FC<{ data: any; trips: () => void }> = ({ data, trips }) => {
  const [vis, setVis] = useAtom(visAtom);

  const deleteHandler = (id: any) => {
    deleteBusinessTrip(id);
    trips();
  };

  const columns = [
    {
      title: '№',
      dataIndex: 'id_business',
      key: 'id',
    },
    Table.EXPAND_COLUMN,
    {
      title: 'Cотрудник',
      children: [
        { dataIndex: 'surname', width: '0' },
        { dataIndex: 'name', width: '0' },
        { dataIndex: 'patronymic', width: '0' },
      ],
      key: 'employer',
    },
    {
      title: 'Название командировки',
      dataIndex: 'business_ru',
      key: 'Название командировки',
    },
    {
      title: 'Время командировки',
      children: [
        {
          title: 'Дата начала',
          dataIndex: 'beg_date',
          render: (_: any, record: any) => {
            const sDate = new Date(record.beg_date).toLocaleDateString();

            return <p>{sDate}</p>;
          },
        },
        {
          title: 'Дата окончания',
          dataIndex: 'end_date',
          render: (_: any, record: any) => {
            const eDate = new Date(record.end_date).toLocaleDateString();

            return <p>{eDate}</p>;
          },
        },
      ],
      key: 'Время командировки',
    },
    {
      title: 'Страна',
      dataIndex: 'country',
      key: 'Страна',
    },
    {
      title: 'Вид командировки',
      dataIndex: 'business_trip',
      key: 'Вид командировки',
    },
    {
      title: 'Тип командировки',
      dataIndex: 'business_type',
      key: 'Тип командировки',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, render: any) => (
        <Space size="middle">
          <button
            className="p-[5px] text-white rounded"
            onClick={() => deleteHandler(render.id_business)}
          >
            Удалить
          </button>
          <button className="p-[5px] text-white rounded">Редактировать</button>
        </Space>
      ),
    },
  ];

  const handleVis = () => {
    setVis(!vis);
  };

  return (
    <>
      <Filter handleVis={handleVis} page="bt" role="admin" />
      <Table
        columns={columns}
        dataSource={data}
        expandable={{
          expandedRowRender: (record) => <p>{record.department}</p>,
        }}
      />
      <div className={vis ? 'absolute z-50' : 'hidden'}>
        <AddModalBusinessTrip set={handleVis} />
      </div>
    </>
  );
};
