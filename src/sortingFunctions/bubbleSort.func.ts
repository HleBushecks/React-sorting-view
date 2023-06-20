import { sleep } from '../handlers/sleep'
import { SortFunc } from './SortingFunction.type'


export const bubbleSortFunc: SortFunc = async ({ array, delay, setArray }) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      console.log('ok')
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
      setArray(array.slice(0))
      await sleep(delay)
    }
  }
}