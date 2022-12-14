import * as React from 'react'
import {FC} from 'react'
import './App.scss'

import { ContextMenuProvider } from './components/ContextMenu/ContextMenuProvider'
// import Header from './components/Header/Header'
import CanvasContainer from './components/Canvas/CanvasContainer'
import NavbarContainer from './components/Navbar/NavbarContainer'
import MenuContainer from './components/Menu/MenuContainer'
import EducationContainer from './components/Education/EducationContainer'
import DiceContainer from './components/Canvas/Dice/DiceContainer'
// import Ghost from './Ghost'

type AppProps = {
  isEducationActive: boolean
    isMenuActive: boolean
}

const App: FC<AppProps> = ({isEducationActive, isMenuActive}) => {
  
  return (
    <ContextMenuProvider>
      <div className='App'>
        {/* <Ghost /> */}
        {/* <Header /> */}
        <NavbarContainer />
        {isMenuActive && <MenuContainer />}
        <div className='map'>
          <CanvasContainer />
        </div>
        <div className='dice'>
        <DiceContainer />
        </div>
      {isEducationActive && <EducationContainer />}
      </div>
    </ContextMenuProvider>
  )
}

export default App