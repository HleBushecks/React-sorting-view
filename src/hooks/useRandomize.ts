import { Dispatch, SetStateAction } from 'react'

interface IRandomize {
  (
    array: number[],
    setArray: Dispatch<SetStateAction<number[]>>,
  ): void
}

export const useRandomize: IRandomize = (array, setArray) => {
  setArray([...array.sort(() => 0.5 - Math.random())])
}