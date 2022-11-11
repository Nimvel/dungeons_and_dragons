import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import OptionsContainer from './Options/OptionsContainer'
import MapMenuContainer from './MapMenu/MapMenuContainer'
import CreateMapContainer from './CreateMap/CreateMapContainer'
import ItemsContainer from './Items/ItemsContainer'
import DiceMenuContainer from './DiceMenu/DiceMenuContainer'
import PaintContainer from './Paint/PaintContainer'

//@ts-ignore
import s from '../Navbar/Navbar.module.scss'

type MenuProps = {
    onCrossClick: () => void
}

const Menu: FC<MenuProps> = ({ onCrossClick }) => {
    

    return <div className='menu'>
                <div className={s.closeModal} onClick={onCrossClick} />
                <Routes>
                <Route path='/ready_maps' element={<MapMenuContainer />} />
                   <Route path='/create_map' element={<CreateMapContainer />} />
                   <Route path='/items' element={<ItemsContainer />} />
                   <Route path='/dice' element={<DiceMenuContainer />} />
                   <Route path='/paint' element={<PaintContainer />} />
                   <Route path='/settings' element={<OptionsContainer />} />
                </Routes>
                   
            </div>
}

export default Menu

