import { FC } from 'react'
import { useSettings } from '../../hooks/useSettings'
import styles from './line.module.css'

interface Props {
  height: number
}

const Line: FC<Props> = ({ height }) => {
  const { length } = useSettings()

  return (
    <div className={styles.line} style={{ height: `${height / length * 80}vh` }}></div>
  )
}

export default Line
