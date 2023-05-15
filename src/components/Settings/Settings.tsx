/* eslint-disable react-hooks/rules-of-hooks */
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { useBubbleSort } from '../../hooks/useBubbleSort'
import { useQuickSort } from '../../hooks/useQuickSort'
import { useRandomize } from '../../hooks/useRandomize'
import { ISettings } from '../../types/Settings'
import styles from './settings.module.css'

interface Props {
  array: number[],
  setArray: Dispatch<SetStateAction<number[]>>,
  settings: ISettings,
  setSettings: Dispatch<SetStateAction<ISettings>>
}

const generateNewArray = (length: number) => {
  const newArray = []
  for (let i = 1; i < length + 1; i++) {
    newArray.push(i)
  }
  return newArray
}

const Settings: FC<Props> = ({ array, setArray, settings, setSettings }) => {
  const [delay, setDelay] = useState<number>(100)

  const changeArrayLength = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArray(generateNewArray(Number(event.target.value)))
  }

  const changeHeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings(prev => ({ ...prev, height: Number(event.target.value) }))
  }

  const changeWidth = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings(prev => ({ ...prev, width: Number(event.target.value) }))
  }

  const changeGap = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings(prev => ({ ...prev, gap: Number(event.target.value) }))
  }

  const reset = () => {
    setArray(generateNewArray(array.length))
  }

  return (
    <div className={styles.settings}>
      <div className={styles.block}>
        <h4>Array length: {array.length}</h4>
        <input type="range" min={0} max={500} value={array.length} onChange={changeArrayLength} />
      </div>
      <div className={styles.block}>
        <h4>Line height: {settings.height} px</h4>
        <input type="range" min={1} max={100} value={settings.height} onChange={changeHeight} />
      </div>
      <div className={styles.block}>
        <h4>Line width: {settings.width} px</h4>
        <input type="range" min={1} max={100} value={settings.width} onChange={changeWidth} />
      </div>
      <div className={styles.block}>
        <h4>Gap: {settings.gap} px</h4>
        <input type="range" min={1} max={100} value={settings.gap} onChange={changeGap} />
      </div>
      <div className={styles.block}>
        <h4>Delay: {delay} ms</h4>
        <input type="range" min={0} max={3000} value={delay} onChange={(e) => setDelay(Number(e.target.value))} />
      </div>
      <div className={styles.block}>
        <button onClick={() => useRandomize(array, setArray)}>Randomize</button>
      </div>
      <div className={styles.block}>
        <button onClick={reset}>Reset</button>
      </div>
      <div className={styles.block}>
        <button onClick={() => useBubbleSort(array, setArray, delay)}>Bubble Sort</button>
      </div>
      <div className={styles.block}>
        <button onClick={() => useQuickSort(array, setArray, delay)}>Quick Sort</button>
      </div>
    </div >
  )
}

export default Settings