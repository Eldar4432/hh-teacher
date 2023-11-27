import { FC } from "react"

export const AddModalWorker: FC<{set:()=>void}> = ( {set} ) => {

    const cancelHandle = () =>{
        set()
    }

  return (
    <div className="top-0 left-0 bg-black/[.4] w-[100vw] h-[100vh] fixed z-50flex justify-center items-center" onClick={()=>set()}>
        <div className="border border-[2px] border-[black] w-[350px] m-auto flex flex-col p-[20px] bg-white rounded-[20px]" onClick={(e)=>e.stopPropagation()} >
            <input type="text" className="border-solid border-2 p-[3px] rounded" placeholder="Сотрудник" />
            <select name="" id="" placeholder="Структура">
                <option value="">Структура</option>
            </select>
            <select name="" id="" placeholder="Должность">
                <option value="" >Должность</option>
            </select>
            <div className="flex justify-around">
                <button className="border border-[2px] p-[5px] rounded-[10px] hover:text-[white] hover:bg-[blue]" onClick={cancelHandle}>Отменить</button>
                <button className="border border-[2px] p-[5px] rounded-[10px] hover:text-[white] hover:bg-[blue]">Добавить</button>
            </div>
        </div>
    </div>
  )
}