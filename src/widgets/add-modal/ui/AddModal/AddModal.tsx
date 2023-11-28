import { useAtom } from "jotai"
import { FC } from "react"
import { locAtom } from "~widgets/add-modal/"

export const AddModalBusinessTrip:FC<{set:()=>void}> = ( {set} ) => {

    const [loc, setLoc] = useAtom(locAtom)

    const handleLoc = (e:any) =>{
        setLoc(e.target.value)  
    }
    
    const handleHandle = (event:any) =>{
        event.preventDefault()
        const getData = new FormData(event.currentTarget) 
        const data = Object.fromEntries(getData)
        const values = [...getData.values()]
        const isEmpty = values.includes('')

        if(isEmpty) {
            alert('Заполните все поля')
            return
        }

        console.log('data => ', data);
        console.log('values => ', values);
        
        event.currentTarget.reset()
        return 
    }
    

  return (
    <div className="top-0 left-0 bg-black/[.4] w-[100vw] h-[100vh] fixed z-50 flex justify-center items-center" onClick={()=>set()} >
        <form className="border border-[2px] w-[400px] h-[500px] m-auto flex flex-col p-[20px] bg-white rounded-[20px]" onClick={(e)=>e.stopPropagation()} onSubmit={handleHandle} >
            <input type="text" placeholder="Командировка" name='btName' className="p-[5px] border-solid"/>
            <select name="btType" id="" className="my-[24px] border-solid">
                <option value="" disabled selected>Тип командировки</option>
                <option value="job">Служебная</option>
                <option value="visit">Приглассительная</option>
            </select>
            <select name="btLoc" id="" className="border-solid" onChange={handleLoc}>
                <option value="" disabled selected>Вид командировки</option>
                <option value="in">Внутренняя</option>
                <option value="out">Внешняя</option>
            </select>
            {loc === 'out' ? 
                <select name="country" id="" className={'my-[24px]'}>
                    <option value='' disabled selected>Страна командировки</option>
                    <option value="usa">США</option>
                    <option value="uk">Великобритания</option>
                    <option value="ru">Россия</option>
                    <option value="kz">Казахстан</option>
                    <option value="bl">Белорусь</option>
                    <option value="au">Австрия</option>
                    <option value="aus">Австралия</option>
                </select>
            : loc === 'in' ?
                <select name="region" id="" className="my-[24px]">
                    <option value="" selected disabled>Область</option>
                    <option value="c">Чуйская область</option>
                    <option value="n">Нарынская область</option>
                    <option value="o">Ошская область</option>
                    <option value="i">Иссык-Кульская область</option>
                    <option value="j">Жалал-Абадская область</option>
                    <option value="t">Таласская область</option>
                    <option value="b">Баткенская область</option>
                </select>
                :null
            }
            
            <div className="flex justify-between my-[24px]">
                <div>
                    <label htmlFor="startDate" className="block">Дата начала</label>
                    <input type="date" name="startDate"/>
                </div>
                <div>
                    <label htmlFor="endDate" className="block">Дата окончания</label>
                    <input type="date" name="endDate"/>
                </div>
            </div>
            <input type="text" placeholder="ФИО сотрудника" name='name' className="p-[5px] my-[24px] border-solid" />
            <input type="text" placeholder="№ и дата приказа" name='order' className="p-[5px] border-solid"/>
            <div className="flex justify-around my-[24px]">
                <button type="reset" className="border border-[2px] p-[5px] rounded-[10px] hover:text-[white] hover:bg-[blue]" onClick={()=>set()}>Отменить</button>
                <button type="submit" className="border border-[2px] p-[5px] rounded-[10px] hover:text-[white] hover:bg-[blue]">Добавить</button>
            </div>
        </form>
    </div>
  )
}