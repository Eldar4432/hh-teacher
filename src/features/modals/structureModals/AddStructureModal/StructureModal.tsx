import { FC } from 'react';

import { useAtom } from 'jotai';

import { departmentAtom } from '~entities/modals';
import { Button, Input } from '~shared/ui';
import { putDepartment } from '~entities/department';

export const StructureModal: FC<{ set: () => void; handleDepartment: () => void }> = ({
  set,
  handleDepartment,
}) => {
  const [data, setData] = useAtom(departmentAtom);

  const handleChange = (e: any) => {
    const name = e.target.name;

    setData((prevData) => ({ ...prevData, [name]: e.target.value }));
  };

  const handleReset = () => {
    setData((prev) => ({
      ...prev,
      departmentKg: '',
      departmentRu: '',
    }));
  };

  const handlePut = (data: any) => {
    putDepartment(data);
    handleReset();
    set();
    handleDepartment();
  };

  const { ...otherProps } = data;
  const canSave = [...Object.values(otherProps)].every(Boolean);

  return (
    <div
      className="top-0 left-0 bg-black/[.4] w-[100vw] h-[100vh] fixed z-50 flex justify-center items-center"
      onClick={() => {
        handleReset();
        set();
      }}
    >
      ƒ
      <form
        onClick={(e) => e.stopPropagation()}
        action=""
        className="border border-[2px] w-[400px] m-auto flex flex-col p-[20px] bg-white rounded-[20px]"
      >
        <Input
          type="text"
          placeholder="Аталышы"
          name="departmentKg"
          value={data.departmentKg}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Название"
          name="departmentRu"
          value={data.departmentRu}
          onChange={handleChange}
        />
        <div className="flex justify-around mt-[8px]">
          <Button onClick={handleReset}>Очистить</Button>
          <Button onClick={() => handlePut(data)} disabled={!canSave ? true : false}>
            Сохранить
          </Button>
        </div>
      </form>
    </div>
  );
};
