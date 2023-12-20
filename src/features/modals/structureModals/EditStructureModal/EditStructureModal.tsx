import { FC } from 'react';

import { Button, Input } from '~shared/ui';
import { updateDepartment } from '~entities/department';

export const EditStructureModal: FC<{
  info: any;
  change: (e: any) => void;
  handleDepartment: () => void;
  hide: () => void;
}> = ({ info, change, handleDepartment, hide }) => {
  const handleSave = async (data: any) => {
    const detail = {
      id: data.id_department,
      departmentKg: data.department_kg,
      departmentRu: data.department_ru,
    };

    updateDepartment(detail);
    handleDepartment();
    hide();
  };

  return (
    <div
      className="top-0 left-0 bg-black/[.4] w-[100vw] h-[100vh] fixed z-50 flex justify-center items-center"
      onClick={hide}
    >
      <form
        action=""
        onClick={(e: any) => e.stopPropagation()}
        className="border border-[2px] w-[400px] m-auto flex flex-col p-[20px] bg-white rounded-[20px]"
      >
        <Input
          value={info.department_kg}
          name="department_kg"
          placeholder="Аталышы"
          onChange={change}
        />
        <Input
          value={info.department_ru}
          name="department_ru"
          placeholder="Название"
          onChange={change}
        />
        <div className="flex justify-between">
          <Button onClick={() => handleSave(info)}>Сохранить</Button>
          <Button onClick={hide}>Отменить</Button>
        </div>
      </form>
    </div>
  );
};
