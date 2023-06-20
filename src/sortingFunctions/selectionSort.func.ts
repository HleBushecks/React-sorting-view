import { sleep } from '../handlers/sleep'
import { SortFunc } from './SortingFunction.type'

export const selectionSortFunc: SortFunc = async ({ array, delay, setArray }) => {
  const n = array.length

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i

    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j
      }
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]]
      setArray([...array])
      await sleep(delay)
    }
  }
}
