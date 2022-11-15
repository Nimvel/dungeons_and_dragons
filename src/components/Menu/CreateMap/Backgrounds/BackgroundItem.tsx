import { FC } from 'react'

//@ts-ignore
import s from '../../Menu.module.scss'

type BackgroundItemProps = {

    backgroundItem: string
    clickedItemId: string
    id: string
    
    onCrossClick: (id: string) => void
    onBackgroundItemClick: (id: string) => void
    onFillClick: (backgroundItem) => void
}

const BackgroundItem: FC<BackgroundItemProps> = ({ backgroundItem, id, clickedItemId, 
    onBackgroundItemClick, onFillClick, onCrossClick
}) => {

    return <div className={clickedItemId === id ? `${s.item} ${s.item_active}` : s.item}>
        <div className={s.holder}>
            <img src={backgroundItem} alt={backgroundItem} onClick={() => onBackgroundItemClick(id)} 
            onDoubleClick={() => onFillClick(backgroundItem)} />

            <div className={s.closeModal} onClick={() => onCrossClick(id)} />
        </div>
    </div>
}

export default BackgroundItem