import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './Context/Context.jsx'
import Footer from './Component/Footer/Footer.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <App />   
      <Footer/>
    </UserProvider>
  </StrictMode>,
)
