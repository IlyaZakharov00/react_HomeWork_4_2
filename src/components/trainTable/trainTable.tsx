import styles from './trainTable.module.css'
import { ItemSteps } from '../itemSteps/itemSteps';
import moment from 'moment';

type TTrain = {
    data?: string,
    distance?: string,
}

type TProps = {
  trains: Array<TTrain>
  deleteTrain: Function;
}


export const TrainTable = (props:TProps) => {
  const {trains, deleteTrain} = props

  if(trains.length > 1){
    trains.sort((a,b) => Number(moment(b.data, 'DD.MM.YY')) - Number(moment(a.data, 'DD.MM.YY')));
  }

  return (
    <div className={styles['train-table-container']}>
        <div className={styles['train-label-container']}>
            <label className={styles['form-label-item']}>Дата(ДД.ММ.ГГ)</label>
            <label className={styles['form-label-item']}>Пройдено км</label>
            <label className={styles['form-label-item']}>Действия</label>  
      </div>  
        <div className={styles['allTrain-container']}>
          {trains.map((train:TTrain)=>{
            return(
              <ItemSteps train = {train} deleteTrain = {deleteTrain} key={Math.random()}/>
            )
          })}
        </div> 
    </div>
  )
}
