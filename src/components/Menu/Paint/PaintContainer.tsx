import { FC } from 'react'

import { connect } from 'react-redux'
import { AppStateType } from '../../../redux/store'
import { onChangePaintbrushColor, onPensilMode, offPensilMode, onLineMode, offLineMode } from '../../../redux/paint-reducer'
import { getLineMode, getPaintbrushColor, getPensilMode } from '../../../redux/paint-selectors'

import Paint from './Paint'

type MapStateToProps = {
    paintbrushColor: string
    pensilMode: boolean
    lineMode: boolean
}

type MapDispatchToProps = {
    onChangePaintbrushColor: (color: string) => void
    onPensilMode: () => void
    offPensilMode: () => void
    onLineMode: () => void
    offLineMode: () => void
}

type PaintContainerProps = MapStateToProps & MapDispatchToProps

const PaintContainer: FC<PaintContainerProps> = ({ paintbrushColor, pensilMode, lineMode,
    onChangePaintbrushColor, onPensilMode, offPensilMode, onLineMode, offLineMode }) => {

    const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangePaintbrushColor(e.target.value)
    }

    return <Paint paintbrushColor={paintbrushColor} pensilMode={pensilMode} lineMode={lineMode}
        onChangeColor={onChangeColor} onPensilMode={onPensilMode}
        offPensilMode={offPensilMode} onLineMode={onLineMode} offLineMode={offLineMode} />
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        paintbrushColor: getPaintbrushColor(state),
        pensilMode: getPensilMode(state),
        lineMode: getLineMode(state)
    }
}

export default connect(mapStateToProps,
    { onChangePaintbrushColor, onPensilMode, offPensilMode, onLineMode, offLineMode }
)(PaintContainer)