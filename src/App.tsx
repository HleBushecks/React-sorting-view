
import { FC, useState } from 'react'
import LinesContainer from './components/LinesContainer/LinesContainer'
import Settings from './components/Settings/Settings'
import './styles/App.css'
import { ISettings } from './types/Settings'

const App: FC = () => {
  const [array, setArray] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const [settings, setSettings] = useState<ISettings>({
    gap: 5,
    height: 10,
    width: 10
  })

  return (
    <div className='app'>
      <h1>It's a simple app for watching how to work sorting algorithm's</h1>
      <Settings array={array} setArray={setArray} setSettings={setSettings} settings={settings} />
      <LinesContainer array={array} settings={settings} />
    </div>
  )
}

export default App
