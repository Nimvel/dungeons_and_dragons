import { FC } from 'react'

//@ts-ignore
import s from './MapMenu.module.scss'
//@ts-ignore
import style from '../Menu.module.scss'

type PictureProps = {
    picture: string
    id: number

    onPictureClick: (picture: string) => void
    onCrossClick: (id: number) => void
}

const Picture: FC<PictureProps> = ({ picture, id, onPictureClick, onCrossClick }) => {

    return <div className={s.picture}>
        <div className={s.holder}>
            <img src={picture} alt={picture} onClick={() => onPictureClick(picture)} />

            <div className={style.closeModal} onClick={() => onCrossClick(id)} />
        </div>
    </div>
}

export default Picture