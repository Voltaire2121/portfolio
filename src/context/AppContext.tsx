import { createContext } from 'react'
import { AppContextType } from './AppContextProvider'

export const AppContext = createContext<AppContextType | null>(null)
