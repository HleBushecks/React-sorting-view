
import { FC, useEffect, useState } from 'react'
import LinesContainer from './components/LinesContainer/LinesContainer'
import Settings from './components/Settings/Settings'
import { generateNewArray } from './handlers/generateNewArray'
import { useSettings } from './hooks/useSettings'
import './styles/App.css'

const App: FC = () => {
  const [array, setArray] = useState<number[]>([])
  const { length, delay } = useSettings()

  useEffect(() => {
    setArray(generateNewArray(length))
  }, [length])

  useEffect(() => {
    document.documentElement.style.setProperty('--delay', `${delay}ms`)
  }, [delay])
  
  return (
    <div className='app'>
      <h1>It&apos;s a simple app for watching how to work sorting algorithm&apos;s</h1>
      <Settings array={array} setArray={setArray} />
      <LinesContainer array={array} />
    </div>
  )
}

export default App
