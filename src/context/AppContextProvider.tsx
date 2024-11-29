import { AppContext } from './AppContext'
import { useTranslation } from 'react-i18next'

type ContextProps = {
  children: JSX.Element | JSX.Element[]
}

export type AppContextType = {
  changeLanguage: (newLang: string) => void
}

export const AppContextProvider = ({ children }: ContextProps) => {
  const { i18n } = useTranslation()

  const changeLanguage = (newLang: string) => {
    if (newLang === 'en') i18n.changeLanguage('en-US')
    else i18n.changeLanguage('es-LA')
  }

  return (
    <AppContext.Provider value={{ changeLanguage }}>
      {children}
    </AppContext.Provider>
  )
}
