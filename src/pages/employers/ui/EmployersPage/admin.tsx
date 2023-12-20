import { Space, Table } from 'antd';
import { atom, useAtom } from 'jotai';

import { FC, useState } from 'react';

import { deleteUser } from '~entities/employers';

import { EmployerEditModal, EmployerModal } from '~features';
import { Button, ChangeIcon, DeleteIcon } from '~shared/ui';
import { Filter } from '~widgets/filter';

const visAtom = atom(false);

export const AdminTablePage: FC<{ data: any; handleUsers: () => void }> = ({
  data,
  handleUsers,
}) => {
  const [vis, setVis] = useAtom(visAtom);
  const [isEditing, setIsEditing] = useState(false);
  const [info, setInfo] = useState({});

  const handleDelete = (id: any) => {
    deleteUser(id);
    handleUsers();
  };

  const handleVis = () => {
    setVis(!vis);
  };

  const editHandle = async (record?: any) => {
    setIsEditing(!isEditing);
    setInfo(record);
  };

  const handleChange = (e: any) => {
    const name = e.target.name;

    const value = name === 'pin' ? Number(e.target.value) : e.target.value;

    setInfo((prev) => ({ ...prev, [name]: value }));
  };

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
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => {
        return (
          <Space className="flex justify-around">
            <Button
              className="p-[3px] rounded text-white"
              onClick={() => {
                editHandle(record);
              }}
            >
              <ChangeIcon />
            </Button>
            <Button
              className="p-[3px] rounded text-white"
              onClick={() => handleDelete(record.id_employee)}
            >
              <DeleteIcon />
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <>
      <Filter handleVis={handleVis} page="emp" role="admin" />
      <Table columns={columns} dataSource={data} bordered />
      <div className={vis ? 'absolute z-50' : 'hidden'}>
        <EmployerModal set={handleVis} handleUsers={handleUsers} />
      </div>
      <div className={isEditing ? 'absolute z-50' : 'hidden'}>
        <EmployerEditModal
          info={info}
          change={(e: any) => handleChange(e)}
          handleUsers={handleUsers}
          hide={() => setIsEditing(!isEditing)}
        />
      </div>
    </>
  );
};
