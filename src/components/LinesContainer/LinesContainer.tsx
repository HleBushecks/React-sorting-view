import { FC } from 'react'
import Line from '../Line/Line'
import styles from './linesContainer.module.css'

interface Props {
  array: number[]
}

const LinesContainer: FC<Props> = ({ array }) => {
  return (
    <div className={styles.container}>
      {array.map(el =>
        <Line height={el} key={el} />
      )}
    </div>
  )
}

export default LinesContainer