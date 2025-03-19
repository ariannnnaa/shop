import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context/useCartContext.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
<AppProvider>
<BrowserRouter>
   <App/>
</BrowserRouter>
</AppProvider>
)
