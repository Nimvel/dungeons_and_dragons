import * as React from 'react'
import { FC } from 'react'

//@ts-ignore
import s from '../Menu.module.scss'

type CreateMapProps = {
    onChangeWidth: (e: any) => void
    onChangeHeight: (e: any) => void
    onCreateMap: () => void
}

const CreateMap: FC<CreateMapProps> = ({onChangeWidth, onChangeHeight, onCreateMap}) => {

    return <div className={s.options}>
        <div>Dimentions</div>
        <input onChange={onChangeWidth} className={s.enterNumber} placeholder={`map's width`} />
        <input onChange={onChangeHeight} className={s.enterNumber} placeholder={`map's height`} />
    <button onClick={onCreateMap} >Create Map</button>
    </div>
}

export default CreateMap