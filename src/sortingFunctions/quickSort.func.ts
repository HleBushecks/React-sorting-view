import { Dispatch, SetStateAction } from 'react'
import { sleep } from '../handlers/sleep'
import { SortFunc } from './SortingFunction.type'

type setArrayType = Dispatch<SetStateAction<number[]>>

const partition = async (array: number[], low: number, high: number, setArray: setArrayType, delay: number) => {
  const pivot = array[high]
  let i = low - 1

  for (let j = low; j < high; j++) {
    if (array[j] <= pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]]
      setArray(array.slice(0))
      await sleep(delay)
    }
  }

  [array[i + 1], array[high]] = [array[high], array[i + 1]]
  setArray(array.slice(0))
  await sleep(delay)

  return i + 1
}

const quickSortRecursive = async (array: number[], low: number, high: number, setArray: setArrayType, delay: number) => {
  if (low < high) {
    const pivotIndex = await partition(array, low, high, setArray, delay)
    await quickSortRecursive(array, low, pivotIndex - 1, setArray, delay)
    await quickSortRecursive(array, pivotIndex + 1, high, setArray, delay)
  }
}

export const quickSortFunc: SortFunc = ({ array, delay, setArray }) => {
  quickSortRecursive(array, 0, array.length - 1, setArray, delay)
}