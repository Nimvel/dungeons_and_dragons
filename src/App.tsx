import './App.scss'
import { ContextMenuProvider } from './components/ContextMenu/ContextMenuProvider'
// import Header from './components/Header/Header'
import MapContainer from './components/Map/MapContainer'
import NavbarContainer from './components/Navbar/NavbarContainer'
import MenuContainer from './components/Menu/MenuContainer'

const App = () => {
  return (
    <ContextMenuProvider>

      <div className='App'>
        {/* <Header /> */}
        <NavbarContainer />
        <MenuContainer />
        <div className='content'>
          <MapContainer />
        </div>
      </div>
    </ContextMenuProvider>

  )
}

export default App;