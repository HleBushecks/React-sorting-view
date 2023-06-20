import { Dispatch, SetStateAction, createContext } from 'react'

export interface ISettings {
  delay: number,
  length: number,
  setDelay: Dispatch<SetStateAction<number>>
  setLength: Dispatch<SetStateAction<number>>
}
export const settingsContext = createContext<ISettings>({} as ISettings)