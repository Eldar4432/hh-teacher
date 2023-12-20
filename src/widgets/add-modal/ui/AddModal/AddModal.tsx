import { useAtom } from 'jotai';

import { FC, useEffect, useState } from 'react';

import {
  getBusinessTrip,
  getBusinessType,
  getCountry,
  getDepartment,
  getDistrict,
  getEmployee,
  // getPost,
  getRegion,
  // getRole,
} from '~entities/shared';
import { Button, Input } from '~shared/ui';

import { locAtom } from '~widgets/add-modal/';

export const AddModalBusinessTrip: FC<{ set: () => void }> = ({ set }) => {
  const [loc, setLoc] = useAtom(locAtom);

  const [district, setDistrict]: any = useState();
  // const [role, setRole]: any = useState();
  const [department, setDepartment]: any = useState();
  const [employee, setEmployee]: any = useState();
  // const [post, setPost]: any = useState();
  const [bType, setBusinessType]: any = useState();
  const [bTrip, setBusinessTrip]: any = useState();
  const [region, setRegion]: any = useState();
  const [country, setCountry]: any = useState();

  const [currentRegion, setCurrentRegion] = useState('1');

  const getInfo = async () => {
    setDistrict(await getDistrict());
    // setRole(await getRole());
    setDepartment(await getDepartment());
    setEmployee(await getEmployee());
    // setPost(await getPost());
    setBusinessType(await getBusinessType());
    setBusinessTrip(await getBusinessTrip());
    setRegion(await getRegion());
    setCountry(await getCountry());
  };

  useEffect(() => {
    getInfo();
  }, []);

  const handleLoc = (e: any) => {
    setLoc(e.target.value);
  };

  const handleHandle = (event: any) => {
    event.preventDefault();

    const getData = new FormData(event.currentTarget);

    const values = [...getData.values()];

    const isEmpty = values.includes('');

    if (isEmpty) {
      return;
    }

    event.currentTarget.reset();
  };

  const handleRegion = (e: any) => {
    setCurrentRegion(e.target.value);
  };

  return (
    <div
      className="top-0 left-0 bg-black/[.4] w-[100vw] h-[100vh] fixed z-50 flex justify-center items-center"
      onClick={() => set()}
    >
      <form
        className="border border-[2px] w-[400px] m-auto flex flex-col p-[20px] bg-white rounded-[20px]"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleHandle}
      >
        <Input
          type="text"
          placeholder="Командировка"
          name="btName"
          className="p-[5px] border-solid"
        />
        <label className="my-[24px]" htmlFor="">
          Тип командировки
          <br />
          <select id="" className="w-[100%] border-solid" onChange={handleLoc}>
            {bType?.map((el: any) => (
              <option key={el.id_business_type} value={el.id_business_type}>
                {el.business_type}
              </option>
            ))}
          </select>
        </label>
        {loc === '2' ? (
          <>
            <label htmlFor="">
              Страна командировки
              <br />
              <select name="country" id="">
                <option value="">Выберите страну</option>
                {country?.map((el: any) => (
                  <option key={el.id_country} value={el.id_country}>
                    {el.country}
                  </option>
                ))}
              </select>
            </label>
          </>
        ) : (
          <>
            <select
              name="region"
              id=""
              className="w-[100%]"
              onChange={handleRegion}
              value={currentRegion}
            >
              <option value="">Выберите область</option>
              {region?.map((el: any) => (
                <option key={el.id_region} value={el.id_region}>
                  {el.region}
                </option>
              ))}
            </select>

            <select name="district" id="">
              <option value="">Выберите район</option>
              {district
                ?.filter((dist: any) => dist.id_region.toString() === currentRegion)
                .map((el: any) => (
                  <option key={el.id_district}>{el.district}</option>
                ))}
            </select>
          </>
        )}
        <label htmlFor="">
          Вид командировки
          <br />
          <select name="btLoc" id="" className="border-solid w-[100%]">
            {bTrip?.map((el: any) => (
              <option key={el.id_business_trip} value={el.id_business_trip}>
                {el.business_trip}
              </option>
            ))}
          </select>
        </label>
        <div className="flex justify-between my-[24px]">
          <div>
            <label htmlFor="startDate" className="block">
              Дата начала
            </label>
            <input type="date" name="startDate" />
          </div>
          <div>
            <label htmlFor="endDate" className="block">
              Дата окончания
            </label>
            <input type="date" name="endDate" />
          </div>
        </div>
        <label htmlFor="">
          Сотрудник
          <br />
          <select name="employer" id="" className="w-[100%]">
            <option value="">Выберите сотрудника</option>
            {employee?.map((el: any) => (
              <option key={el.id_employee} value={el.id_employee}>
                {el.surname} {el.name} {el.patronymic}
              </option>
            ))}
          </select>
        </label>
        <label>
          Департамент
          <br />
          <select name="" id="" className="w-[100%] h-[100%]">
            {department?.map((el: any) => (
              <option key={el.id_department}>{el.department}</option>
            ))}
          </select>
        </label>
        <Input
          type="text"
          placeholder="№ и дата приказа"
          name="order"
          className="p-[5px] border-solid"
        />
        <div className="flex justify-around mt-[24px]">
          <Button
            className="border border-[2px] p-[5px] rounded-[10px] hover:text-[white] hover:bg-[blue]"
            onClick={() => set()}
          >
            Отменить
          </Button>
          <Button className="border border-[2px] p-[5px] rounded-[10px] hover:text-[white] hover:bg-[blue]">
            Добавить
          </Button>
        </div>
      </form>
    </div>
  );
};
