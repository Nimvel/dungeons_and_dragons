import { FC } from 'react'
import { BackgroundItemOnMapType } from '../../../redux/map-reducer'

//@ts-ignore
import s from './MapMenu.module.scss'
//@ts-ignore
import style from '../Menu.module.scss'

type PictureProps = {
    picture: string
    id: number
    isMapMenuChapter: boolean

    setNewMap: (picture: string) => void
    deletePicture: (id: number) => void
    cleanLines: () => void
    updateBackgroundItems: (backgroundItemsOnMap: Array<BackgroundItemOnMapType>) => void

    menuChapters: (icon: string) => void
    endChapter: (isEndChapter: boolean) => void
}

const Picture: FC<PictureProps> = ({ picture, id, cleanLines, updateBackgroundItems, 
    setNewMap, deletePicture, isMapMenuChapter, menuChapters, endChapter }) => {

    const onPictureClick = () => {
        updateBackgroundItems([])
        cleanLines()
        setNewMap(picture)

        if (isMapMenuChapter) {
            menuChapters('')
            endChapter(true)
        }
    }

    const onCrossClick = () => {
        deletePicture(id)
    }

    return <div className={s.picture}>
        <div className={s.holder}>
            <img src={picture} alt={picture} onClick={onPictureClick} />

            <div className={style.closeModal} onClick={onCrossClick} />
        </div>
    </div>
}

export default Picture