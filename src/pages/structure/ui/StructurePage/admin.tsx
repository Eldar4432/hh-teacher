import { Space, Table } from 'antd';
import { atom, useAtom } from 'jotai';
import { FC } from 'react';
import { AddModalWorker } from '~widgets/add-modal';
import { Filter } from '~widgets/filter';


const visAtom = atom(false)

export const AdminTablePage: FC<{ data: any }> = ({ data }) => {

  const [vis,setVis] = useAtom(visAtom)

  const columns = [
    {
      title: "№",
      dataIndex: 'id',
      key:"id"
    },
    {
      title: "Аталышы",
      key:"atalysh"
    },
    {
      title:'Название',
      key: 'title'
    },
    {
      title: 'Action',
      key:"action",
      render: ()=>(
        <Space size={"middle"}>
          <button className='p-[3px] rounded text-white'>
            Редактировать
          </button>
          <button className='p-[3px] rounded text-white'>
            Удалить
          </button>
        </Space>
      )
    }
  ]

  const handleVis = () =>{
    setVis(!vis)    
  }

  return (
    <>
      <div className={vis ? 'absolute z-50': 'hidden'}>
        <AddModalWorker set={handleVis}/>
      </div>
      <Table columns={columns} dataSource={data} bordered />
    </>
  );
};
