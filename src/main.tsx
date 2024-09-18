import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { StoreProvider } from 'components/containers/store.tsx'
import 'styles/commons.css'
import 'styles/variables.css'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('app-root')!).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>
)
