import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import Home from './pages/Home.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import { Route, Routes } from 'react-router-dom'
import Favorites from './pages/Favorites.jsx'
function App() {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
      </Route>
    </Routes>
  )
}

export default App
