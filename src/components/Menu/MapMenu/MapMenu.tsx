import { FC } from 'react'
import { PicturesType } from '../../../redux/pictures-reducer'
import Picture from './Picture'

//@ts-ignore
import s from './MapMenu.module.scss'
//@ts-ignore
import style from '../Menu.module.scss'

import { BackgroundItemOnMapType } from '../../../redux/map-reducer'
import AddPictureButton from '../../AddPictureButton/AddPictureButton'

type MapMenuProps = {
    pictures: Array<PicturesType>

    isMapMenuChapter: boolean
menuChapters: (icon: string) => void
    endChapter: (isEndChapter: boolean) => void

    saveNewPicture: (picture: Blob | MediaSource) => void
    setNewMap: (map: string) => void
    deletePicture: (id: number) => void
    cleanLines: () => void
    updateBackgroundItems: (backgroundItemsOnMap: Array<BackgroundItemOnMapType>) => void
}

const MapMenu: FC<MapMenuProps> = ({ pictures, saveNewPicture, cleanLines,
    setNewMap, deletePicture, updateBackgroundItems, isMapMenuChapter, menuChapters, endChapter }) => {

    const addNewPicture = (e: any) => {
        e.target.files.length && saveNewPicture(e.target.files[0])
    }

    const picturesElements = pictures.map(p => <Picture
        picture={p.picture} key={p.id} id={p.id} setNewMap={setNewMap} cleanLines={cleanLines}
        deletePicture={deletePicture} updateBackgroundItems={updateBackgroundItems}
        isMapMenuChapter={isMapMenuChapter} menuChapters={menuChapters} endChapter={endChapter} />)

    return <div className={style.menu}>
        <AddPictureButton addPicture={addNewPicture} />

        <div className={s.pictures}>
        {picturesElements}
        </div>
    </div>
}

export default MapMenu