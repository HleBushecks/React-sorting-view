import { Dispatch, SetStateAction } from 'react'

interface IBubbleSort {
  (
    array: number[],
    setArray: Dispatch<SetStateAction<number[]>>,
    delay: number
  ): void
}

export const useBubbleSort: IBubbleSort = (array, setArray, delay) => {
  const n = array.length
  let swapped

  let i = 0
  const bubbleSortStep = () => {
    if (i < n - 1) {
      swapped = false
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]]
          swapped = true
        }
      }
      setArray([...array])
      i++

      if (swapped) {
        setTimeout(bubbleSortStep, delay)
      }
    }
  }

  bubbleSortStep()
};

