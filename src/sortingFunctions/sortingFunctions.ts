import { SortFunc } from './SortingFunction.type'
import { bubbleSortFunc } from './bubbleSort.func'
import { insertionSortFunc } from './insertionSort.func'
import { quickSortFunc } from './quickSort.func'
import { selectionSortFunc } from './selectionSort.func'

interface ISortFunc {
  name: string,
  func: SortFunc,
}

export const sortingFunctions: ISortFunc[] = [
  {
    name: 'Bubble Sort',
    func: bubbleSortFunc
  },
  {
    name: 'Quick Sort',
    func: quickSortFunc
  },
  {
    name: 'Selection Sort',
    func: selectionSortFunc
  },
  {
    name: 'Insertion Sort',
    func: insertionSortFunc
  }
]