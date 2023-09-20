import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useStore } from './hooks/useStore'

function App () {
  const { fromLanguage, setFromLanguage } = useStore()
  return (
    <>
      <h1>Google Translate</h1>
      <button onClick={() => {
        setFromLanguage('es')
      }}>
        {fromLanguage}
      </button>
    </>
  )
}

export default App
