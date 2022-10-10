import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { ContextMenuProvider } from './components/context/ContextMenu/ContextMenuProvider.tsx'
// import Header from './components/Header/Header'
import MapContainer from './components/Map/MapContainer'
import NavbarContainer from './components/Navbar/NavbarContainer.tsx'
import MenuContainer from './components/Menu/MenuContainer.tsx'
// import OptionsContainer from './components/Menu/Options/OptionsContainer.tsx'
// import PicturesContainer from './components/Menu/Pictures/PicturesContainer.tsx'

const App = () => {
  return (
    <ContextMenuProvider>

      <div className='App'>
        {/* <Header /> */}
        <NavbarContainer />
        {/* <div className='menu'> */}
          <MenuContainer />
          {/* <Routes>
          <Route path='/pictures' element={<PicturesContainer />} />
          <Route path='/options' element={<OptionsContainer />} />
        </Routes> */}
        {/* </div> */}
        <div className='content'>
          <MapContainer />
        </div>
      </div>
    </ContextMenuProvider>

  )
}

export default App;