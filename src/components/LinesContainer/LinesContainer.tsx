import { FC } from 'react'
import { ISettings } from '../../types/Settings'
import Line from '../Line/Line'
import styles from './linesContainer.module.css'
interface Props {
  array: number[],
  settings: ISettings
}

const LinesContainer: FC<Props> = ({ array, settings }) => {
  return (
    <div className={styles.container} style={{
      gap: settings.gap
    }}>
      {array.map(el =>
        <Line height={el} key={el} heightModifier={settings.height} width={settings.width} />
      )}
    </div>
  )
}

export default LinesContainer