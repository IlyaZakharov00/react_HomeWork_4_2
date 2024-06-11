import { AddTrainForm } from "../addTrainForm/addTrainForm"
import { TrainTable } from "../trainTable/trainTable"
import { useState } from "react"
import styles from "./steps.module.css"

type TTrain = {
  data: string,
  distance: string,
}

export const Steps = () => {
  
  const [trains, setTrain] = useState<Array<TTrain>>([])
  
  const addTrain = (train:TTrain) => {
    for (const item of trains){

      if(train.data === item.data){
        let newDistance = Number(train.distance) + Number(item.distance)

        let newTrain = {
          data: train.data,
          distance: String(newDistance)
        }

        let index = trains.indexOf(item)
        trains.splice(index, 1)
        
        setTrain([...trains, newTrain])
        return
      }
    }

    setTrain([...trains, train])
    console.log(train, 'train')
  }

  const deleteTrain = (data: string) => {

    for (const item of trains){
      if(item.data === data){
        let index = trains.indexOf(item)
        trains.splice(index, 1)        
        setTrain([...trains])
      }
    }
  }

  return (
    <div className={styles['steps-container']}>
        <AddTrainForm addTrain = {addTrain} />
        <TrainTable trains = {trains} deleteTrain = {deleteTrain}/>
    </div>
  )
}
