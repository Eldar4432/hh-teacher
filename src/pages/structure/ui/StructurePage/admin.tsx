import { FC, useState } from 'react';

import { Space, Table } from 'antd';
import { atom, useAtom } from 'jotai';

import { deleteDepartment } from '~entities/department';
import { StructureModal } from '~features/modals';
import { Button, ChangeIcon, DeleteIcon } from '~shared/ui';
import { Filter } from '~widgets/filter';
import { EditStructureModal } from '~features/modals/structureModals/EditStructureModal';

const visAtom = atom(false);

export const AdminTablePage: FC<{ data: any; handleDepartment: () => void }> = ({
  data,
  handleDepartment,
}) => {
  const [vis, setVis] = useAtom(visAtom);
  const [isEditing, setIsEditing] = useState(false);
  const [info, setInfo] = useState({});

  const handleDelete = (id: any) => {
    deleteDepartment(id);
    handleDepartment();
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

    const value = e.target.value;

    setInfo((prev) => ({ ...prev, [name]: value }));
  };

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
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="middle">
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
            onClick={() => handleDelete(record.id_department)}
          >
            <DeleteIcon />
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Filter handleVis={handleVis} page="emp" role="admin" />
      <Table columns={columns} dataSource={data} bordered />
      <div className={vis ? 'absolute z-50' : 'hidden'}>
        <StructureModal set={handleVis} handleDepartment={handleDepartment} />
      </div>
      <div className={isEditing ? 'absolute z-50' : 'hidden'}>
        <EditStructureModal
          info={info}
          change={(e: any) => handleChange(e)}
          handleDepartment={handleDepartment}
          hide={() => setIsEditing(!isEditing)}
        />
      </div>
    </>
  );
};
