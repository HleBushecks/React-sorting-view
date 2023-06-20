import { FC, PropsWithChildren, useState } from 'react'
import { settingsContext } from './settings.context'


const SettingsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [delay, setDelay] = useState<number>(10)
  const [length, setLength] = useState<number>(50)

  return (
    <settingsContext.Provider value={{ delay, length, setDelay, setLength }}>
      {children}
    </settingsContext.Provider>
  )
}

export default SettingsProvider