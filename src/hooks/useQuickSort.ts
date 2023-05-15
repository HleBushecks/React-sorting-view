import { Dispatch, SetStateAction } from 'react'

interface IQuickSort {
  (
    array: number[],
    setArray: Dispatch<SetStateAction<number[]>>,
    delay: number
  ): void
}

export const useQuickSort: IQuickSort = (array, setArray, delay) => {
  const quickSort = (arr: number[], low: number, high: number) => {
    if (low < high) {
      const pivotIndex = partition(arr, low, high)
      setArray([...arr])
      setTimeout(() => {
        quickSort(arr, low, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, high)
      }, delay)
    }
  }

  const partition = (arr: number[], low: number, high: number) => {
    const pivot = arr[high]
    let i = low - 1
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
    return i + 1
  }

  quickSort(array, 0, array.length - 1)
}
