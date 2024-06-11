import styles from './addTrainForm.module.css'
import React, { useState } from 'react';

type TInfo = {
  data: string,
  distance: string,
}

type TProps = {
  addTrain: Function,
}

export const AddTrainForm = (props:TProps) => {  
  const {addTrain} = props;
  
  const [data, setData] = useState<string>("unknown")
  const [distance, setDistance] = useState<string>("unknown")
  const [info, setInfo] = useState<Array<TInfo>>([]);
  
  const hendlerData = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setData(e.target.value)
  }
  
  const hendlerDistance = (e:React.ChangeEvent<HTMLInputElement>)=>{   
    setDistance(e.target.value)
  }

  const hendlerSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    if(data.match(/((0[1-9]|[12][0-9]|3[01])[- \.](0[1-9]|1[012])[- \.](19|20)\d\d)/)){

      if(!distance.match(/\d+/)){
        alert('Неверный формат дистанции!')
        return
      }

      let newInfo = {
        data: data,
        distance: distance
      }

      setInfo([...info, newInfo])
      addTrain(newInfo)

      console.log('submit from addTrainForm')
    } else {
      alert('Неверный формат даты!')
    }

  } 

  return (
    <>
    <form className={styles['addSteps-form-container']} onSubmit={hendlerSubmit}>
        <div className={styles['form-item']}>
            <label className={styles['form-label']}>Дата(ДД.ММ.ГГ)</label>
            <input className={styles['form-input']} type="text" onChange={hendlerData} placeholder='ДД.ММ.ГГ'/> 
        </div>
        <div className={styles['form-item']}>
            <label className={styles['form-label']}>Пройдено км</label>
            <input className={styles['form-input']} type="text" onChange={hendlerDistance}/>
        </div>
        <button type="submit">OK</button>
    </form>
    </>
  )
}
