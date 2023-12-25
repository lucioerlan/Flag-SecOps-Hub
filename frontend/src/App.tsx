import store from '@/store'
import { Provider as StoreProvider } from 'react-redux'
import { useRoutes } from 'react-router-dom'

import { GlobalStyle } from './components'
import useSettings from './hooks/useSettings'
import routes from './routes'

const App = () => {
  const { settings } = useSettings()
  const routing = useRoutes(routes(settings.isLoggedIn))

  return (
    <>
      <GlobalStyle />
      <StoreProvider store={store}>{routing}</StoreProvider>
    </>
  )
}

export default App
