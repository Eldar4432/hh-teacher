import { FC } from 'react';

import { Button, Input } from '~shared/ui';
import { updateUser } from '~entities/employers';

export const EmployerEditModal: FC<{
  info: any;
  change: (e: any) => void;
  handleUsers: () => void;
  hide: () => void;
}> = ({ info, change, handleUsers, hide }) => {
  const handleSave = async (data: any) => {
    const detail = {
      id: data.id_employee,
      name: data.name,
      surname: data.surname,
      patronymic: data.patronymic,
      pin: Number(data.pin),
      birthDate: data.birthDate,
    };

    updateUser(detail);
    handleUsers();
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
        <Input value={info.name} name="name" placeholder="Имя" onChange={change} />
        <Input value={info.surname} name="surname" placeholder="Фамилия" onChange={change} />
        <Input value={info.patronymic} name="patronymic" placeholder="Отчество" onChange={change} />
        <Input value={info.pin} name="pin" placeholder="ПИН" onChange={change} />
        <Input
          type="date"
          value={info.birthDate}
          name="birthDate"
          placeholder="Дата рождения"
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
