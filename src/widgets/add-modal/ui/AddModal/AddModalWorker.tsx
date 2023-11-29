import { FC } from "react"
import { i18n } from '~shared/lib/i18n';

export const AddModalWorker: FC<{set:()=>void}> = ( {set} ) => {

    const { t } = i18n

    const cancelHandle = () =>{
        set()
    }

    const handleForm = (e:any) =>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)
        const values = [...formData.values()]
        const isEmpty = values.includes('')

        if(isEmpty){
            alert('Заполните все поля')
            return
        }

        console.log('data => ', data);
        console.log('values => ', values);

        e.currentTarget.reset()
        
    }

  return (
    <div className="top-0 left-0 bg-black/[.4] w-[100vw] h-[100vh] fixed z-50flex justify-center items-center" onClick={()=>set()}>
        <form className="border border-[2px] border-[black] w-[350px] m-auto flex flex-col p-[20px] bg-white rounded-[20px]" onClick={(e)=>e.stopPropagation()} onSubmit={handleForm} >
            <input type="text" className="border-solid border-2 p-[3px] rounded" placeholder="Сотрудник" name="worker"/>
            <label htmlFor="structure">{t('cm:modal.structure')}
                <br />
                <select name="structure" id="structure" className="w-[100%]">
                    <option value="mon">МОН</option>
                    <option value="mvd">МВД</option>
                    <option value="gns">ГНС</option>
                    <option value="mid">МИД</option>
                </select>
            </label>
            <label htmlFor="job">{t('cm:modal.jobTitle')}
                <br />
                <select name="job" id="job" className="w-[100%]">
                    <option value="engeneer">{t('cm:jobs.engeneer')}</option>
                    <option value="design">{t('cm:jobs.design')}</option>
                    <option value="front">{t('cm:jobs.front')}</option>
                    <option value="back">{t('cm:jobs.back')}</option>
                </select>
            </label>
            <div className="flex justify-around">
                <button type="reset" className="border border-[2px] p-[5px] rounded-[10px] hover:text-[white] hover:bg-[blue]" onClick={cancelHandle}>{t('cm:modal.cancel')}</button>
                <button className="border border-[2px] p-[5px] rounded-[10px] hover:text-[white] hover:bg-[blue]">{t('cm:modal.add')}</button>
            </div>
        </form>
    </div>
  )
}