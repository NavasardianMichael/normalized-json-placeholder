import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { StoreProvider } from 'components/containers/store.tsx'
import App from './App.tsx'
import 'styles/commons.css'
import 'styles/variables.css'

ReactDOM.createRoot(document.getElementById('app-root')!).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>
)
