import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routepath from './Routepath.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routepath />
  </StrictMode>,
)
