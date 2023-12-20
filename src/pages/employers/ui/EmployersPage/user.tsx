import { Table } from 'antd';

import { FC } from 'react';

export const UserTablePage: FC<{ data: any }> = ({ data }) => {
  const columns = [
    {
      title: '№',
      dataIndex: 'id_employee',
      key: 'id',
      width: '0',
    },
    {
      title: 'Фамилия',
      dataIndex: 'surname',
    },
    {
      title: 'Имя',
      dataIndex: 'name',
    },
    {
      title: 'Отчество',
      dataIndex: 'patronymic',
    },
    {
      title: 'ПИН',
      dataIndex: 'pin',
      key: 'pin',
    },
    {
      title: 'Дата рождения',
      key: 'birthDate',
      dataIndex: 'birth_date',
      render: (_: any, record: any) => {
        const date = new Date(record.birth_date).toLocaleDateString();

        return <p>{date}</p>;
      },
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} bordered />
    </>
  );
};
