import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import SettingsProvider from './SettingsProvider/SettingsProvider.tsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <SettingsProvider>
    <App />
  </SettingsProvider>
)
