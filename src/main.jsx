import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/utils.css'
import './Styles/styles.css'
import './index.css'
import './Styles/components/NavBar.css'
import './Styles/components/MovieCard.css'
import './Styles/Pages/Home.css'
import './Styles/Pages/Favorites.css'
import './Styles/components/Footer.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { MovieProvider } from './contexts/MovieContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      {/* <BrowserRouter> */}
      <MovieProvider>
        <App />
      </MovieProvider>
      {/* </BrowserRouter> */}
    </HashRouter>
  </StrictMode>,
)
