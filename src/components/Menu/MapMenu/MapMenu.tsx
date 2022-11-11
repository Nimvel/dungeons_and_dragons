import { FC } from 'react'
import { PicturesType } from '../../../redux/pictures-reducer'
import Picture from './Picture'

//@ts-ignore
import s from './MapMenu.module.scss'
//@ts-ignore
import style from '../Menu.module.scss'

import AddPictureButton from '../../AddPictureButton/AddPictureButton'

type MapMenuProps = {
    pictures: Array<PicturesType>

    addNewPicture: (picture: Blob | MediaSource) => void
    onPictureClick: (picture: string) => void
    onCrossClick: (id: number) => void

}

const MapMenu: FC<MapMenuProps> = ({ pictures, addNewPicture, onPictureClick, onCrossClick }) => {

    const picturesElements = pictures.map(p => <Picture
        picture={p.picture} key={p.id} id={p.id}
        onPictureClick={onPictureClick}
        onCrossClick={onCrossClick} />)

    return <div className={style.menu}>
        <AddPictureButton addPicture={addNewPicture} />

        <div className={s.pictures}>
            {picturesElements}
        </div>
    </div>
}

export default MapMenu