import { FC } from 'react'
import styles from './line.module.css'

interface Props {
  height: number,
  width?: number,
  heightModifier?: number,
}

const Line: FC<Props> = ({ height, width = 10, heightModifier = 10 }) => {
  return (
    <div className={styles.line} style={{
      height: height * heightModifier,
      width,
    }}>
    </div>
  )
}

export default Line