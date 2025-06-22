
import './App.css'
import { AppContextProviders } from './components/Context/AppContextProviders'
import { AppRoutes } from './components/Routes/Routes'

function App() {

  return (
    <>
      <AppContextProviders>
        <AppRoutes />
      </AppContextProviders>
    </>
  )
}

export default App
