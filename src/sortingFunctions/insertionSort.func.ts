import { sleep } from '../handlers/sleep'
import { SortFunc } from './SortingFunction.type'

export const insertionSortFunc: SortFunc = async ({ array, delay, setArray }) => {
  const n = array.length

  for (let i = 1; i < n; i++) {
    const key = array[i]
    let j = i - 1

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j]
      j--
    }

    array[j + 1] = key
    setArray([...array])
    await sleep(delay)
  }
}
