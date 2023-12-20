import { useAtom } from 'jotai';
import { FC } from 'react';

import { createUser } from '~entities/employers';

import { employerModalAtom } from '~entities/modals';
import { Button, Input } from '~shared/ui';

export const EmployerModal: FC<{ set: () => void; handleUsers: () => void }> = ({
  set,
  handleUsers,
}) => {
  const [data, setData] = useAtom(employerModalAtom);

  const handleChange = (e: any) => {
    const name = e.target.name;

    const value = name === 'pin' ? Number(e.target.value) : e.target.value;

    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleReset = () => {
    setData((prev) => ({
      ...prev,
      birthDate: '',
      name: '',
      surname: '',
      patronymic: '',
      password: '',
      pin: '',
    }));
  };

  const handlePut = (data: any) => {
    createUser(data);
    handleReset();
    set();
    handleUsers();
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
      <form
        id="empModalForm"
        className="border border-[2px] w-[400px] m-auto flex flex-col p-[20px] bg-white rounded-[20px]"
        onClick={(e) => e.stopPropagation()}
      >
        <Input
          type="text"
          value={data.surname}
          name="surname"
          placeholder="Фамилия"
          onChange={handleChange}
        />
        <Input
          type="text"
          value={data.name}
          name="name"
          placeholder="Имя"
          onChange={handleChange}
        />
        <Input
          type="text"
          value={data.patronymic}
          name="patronymic"
          placeholder="Отчество"
          onChange={handleChange}
        />
        <Input
          type="text"
          value={data.pin}
          name="pin"
          pattern="[0-9]+"
          inputMode="numeric"
          placeholder="ПИН"
          onChange={handleChange}
        />
        <Input type="date" value={data.birthDate} name="birthDate" onChange={handleChange} />
        <Input
          type="password"
          value={data.password}
          minLength={6}
          name="password"
          placeholder="Пароль"
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
