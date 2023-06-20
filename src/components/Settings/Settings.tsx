import { ChangeEvent, Dispatch, FC, SetStateAction, useMemo, useState } from 'react'
import { generateNewArray } from '../../handlers/generateNewArray'
import { useSettings } from '../../hooks/useSettings'
import { sortingFunctions } from '../../sortingFunctions/sortingFunctions'
import styles from './settings.module.css'
import { randomizeFunc } from '../../sortingFunctions/randomize.func'

interface Props {
  array: number[],
  setArray: Dispatch<SetStateAction<number[]>>,
}


const Settings: FC<Props> = ({ array, setArray }) => {
  const { delay, length, setDelay, setLength } = useSettings()
  const [selectedFunc, setSelectedFunc] = useState<number>(0)

  const sortFuncSettings = useMemo(() => (
    { array, setArray, delay }
  ), [array, delay, setArray])

  const changeSelectedFunc = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedFunc = e.target.value
    const numberSelectedFunc = Number(selectedFunc)
    if (selectedFunc && numberSelectedFunc >= 0) {
      setSelectedFunc(numberSelectedFunc)
    } else {
      setSelectedFunc(0)
    }
  }

  const onClickRun = () => {
    sortingFunctions[selectedFunc].func(sortFuncSettings)
  }

  const changeArrayLength = (e: ChangeEvent<HTMLInputElement>) => {
    const length = e.target.value
    const numberLength = Number(length)
    if (length && numberLength >= 0) {
      setLength(numberLength)
    } else {
      setLength(50)
    }
  }

  const changeDelay = (e: ChangeEvent<HTMLInputElement>): void => {
    const delay = e.target.value
    const numberDelay = Number(delay)
    if (delay && numberDelay >= 0) {
      setDelay(numberDelay)
    } else {
      setDelay(100)
    }
  }

  const reset = () => {
    setArray(generateNewArray(length))
  }

  return (
    <div className={styles.settings}>
      <div className={styles.block}>
        <h4>Array length: {length}</h4>
        <input type="range" min={0} max={500} value={length} onChange={changeArrayLength} />
      </div>
      <div className={styles.block}>
        <h4>Delay: {delay} ms</h4>
        <input type="range" min={0} max={3000} value={delay} onChange={changeDelay} />
      </div>
      <div className={styles.block}>
        <button onClick={reset}>Reset</button>
      </div>
      <div className={styles.block}>
        <button onClick={() => randomizeFunc(sortFuncSettings)}>Randomize</button>
      </div>
      <div className={styles.block}>
        <select value={selectedFunc} onChange={changeSelectedFunc}>
          {sortingFunctions.map(({ name }, index) =>
            <option value={index} key={index}>{name}</option>
          )}
        </select>
      </div>
      <div className={styles.block}>
        <button onClick={onClickRun}>Run!</button>
      </div>
    </div >
  )
}

export default Settings