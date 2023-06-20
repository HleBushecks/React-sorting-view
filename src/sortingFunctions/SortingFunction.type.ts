import { Dispatch, SetStateAction } from 'react'

export type SortFunc = (args: {
  array: number[],
  setArray: Dispatch<SetStateAction<number[]>>,
  delay: number
}) => void