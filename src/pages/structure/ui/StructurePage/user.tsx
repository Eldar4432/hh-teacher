import { FC } from 'react';

import { Table } from 'antd';

export const UserTablePage: FC<{ data: any }> = ({ data }) => {
  const columns = [
    {
      title: '№',
      dataIndex: 'id_department',
      key: 'id',
    },
    {
      title: 'Аталышы',
      dataIndex: 'department_kg',
      key: 'atalysh',
    },
    {
      title: 'Название',
      dataIndex: 'department_ru',
      key: 'title',
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} bordered />
    </>
  );
};
