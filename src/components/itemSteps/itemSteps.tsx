import styles from './itemSteps.module.css'

type TTrain = {
  train: {
    data?: string,
    distance?: string,
    }
    deleteTrain: any;
  }

export const ItemSteps = (props:TTrain) => {

  const {data, distance} = props.train
  const {deleteTrain} = props
  console.log('render item', props)

  return (
    <div className={styles['item']}>
        <div className={styles['item-data']}>{data}</div>
        <div className={styles['item-distance']}>{distance}</div>
        <div className={styles['item-buttons-container']}>
          <div className={styles['item-edit']}></div>
          <div className={styles['item-delete']} onClick={() => deleteTrain(data)}></div>
        </div>
    </div>
  )
}
