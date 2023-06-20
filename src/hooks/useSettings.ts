import { ISettings, settingsContext } from '../SettingsProvider/settings.context'
import {useContext} from 'react'

export const useSettings = (): ISettings => {
    return useContext(settingsContext)
}