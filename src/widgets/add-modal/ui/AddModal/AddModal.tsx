import { FC, useRef } from "react"

export const AddModalBusinessTrip:FC<{set:()=>void}> = ( {set} ) => {

    const prikaz = useRef()
    const otchet = useRef()

    const cancelHandle = () =>{
        set()
    }

  return (
    <div className="top-0 left-0 bg-black/[.4] w-[100vw] h-[100vh] fixed z-50 flex justify-center items-center" onClick={()=>set()}>
        <div className="border border-[2px] w-[400px] h-[500px] m-auto flex flex-col p-[20px] bg-white rounded-[20px]" onClick={(e)=>e.stopPropagation()} >
            <input type="text" placeholder="Командировка" className="p-[5px] border-solid"/>
            <select name="" id="" className="my-[24px] border-solid">
                <option value="" disabled>Тип командировки</option>
                <option value="">Служебная</option>
                <option value="">Приглвссительная</option>
            </select>
            <select name="" id="" className="border-solid">
                <option value="" disabled>Вид командировки</option>
                <option value="">Внутренняя</option>
                <option value="">Внешняя</option>
            </select>
            <input type="text" placeholder="Страна командировки" className="my-[24px] p-[5px] border-solid"/>
            <div className="flex justify-between">
                <div>
                    <label htmlFor="dateStart" className="block">Дата начала</label>
                    <input type="date" name="dateStart"/>
                </div>
                <div>
                    <label htmlFor="endDate" className="block">Дата окончания</label>
                    <input type="date" name="endDate"/>
                </div>
            </div>
            <input type="text" placeholder="ФИО сотрудника" className="p-[5px] my-[24px] border-solid" />
            <input type="text" placeholder="№ и дата приказа" className="p-[5px] border-solid"/>
            <div className="flex justify-around my-[24px]">
                <button className="border border-[2px] p-[5px] rounded-[10px] hover:text-[white] hover:bg-[blue]" onClick={cancelHandle}>Отменить</button>
                <button className="border border-[2px] p-[5px] rounded-[10px] hover:text-[white] hover:bg-[blue]">Добавить</button>
            </div>
        </div>
    </div>
  )
}