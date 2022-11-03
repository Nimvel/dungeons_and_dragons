import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import OptionsContainer from './Options/OptionsContainer'
import PicturesContainer from './Pictures/PicturesContainer'
import CreateMapContainer from './CreateMap/CreateMapContainer'
import ItemsContainer from './Items/ItemsContainer'
import DiceMenuContainer from './DiceMenu/DiceMenuContainer'
import PaintContainer from './Paint/PaintContainer'

//@ts-ignore
import s from '../Navbar/Navbar.module.scss'

type MenuProps = {
    isMenuActive: boolean

    onCrossClick: () => void
}

const Menu: FC<MenuProps> = ({ isMenuActive, onCrossClick }) => {

    return <>
        {isMenuActive &&
            <div className='menu'>
                <div className={s.closeModal} onClick={onCrossClick} />
                <Routes>
                    <Route path='/pictures' element={<PicturesContainer />} />
                    <Route path='/create_map' element={<CreateMapContainer />} />
                    <Route path='/items' element={<ItemsContainer />} />
                    <Route path='/dice' element={<DiceMenuContainer />} />
                    <Route path='/paint' element={<PaintContainer />} />
                    <Route path='/options' element={<OptionsContainer />} />
                </Routes>
            </div>
        }
    </>
}

export default Menu