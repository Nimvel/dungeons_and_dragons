import * as React from 'react'
import { FC } from 'react'

import { connect } from 'react-redux'
import { AppStateType } from '../../../redux/store'
import { 
    changePaintbrushColor, updateStrokeWidth, changePensilMode, 
    changeLineMode, deleteLine, cleanLines, LineType
 } from '../../../redux/paint-reducer'
import { getLineMode, getLines, getPaintbrushColor, getPensilMode, getStrokeWidth } from '../../../redux/paint-selectors'

import Paint from './Paint'

type MapStateToProps = {
    paintbrushColor: string
    strokeWidth: number
    pensilMode: boolean
    lineMode: boolean
    lines: Array<LineType>
}

type MapDispatchToProps = {
    changePaintbrushColor: (color: string) => void
    updateStrokeWidth: (color: number) => void
    changePensilMode: (mode: boolean) => void
    changeLineMode: (mode: boolean) => void
    deleteLine: () => void 
    cleanLines: () => void
}

type PaintContainerProps = MapStateToProps & MapDispatchToProps

const PaintContainer: FC<PaintContainerProps> = ({ paintbrushColor, strokeWidth, pensilMode, lineMode, lines, 
    changePaintbrushColor, updateStrokeWidth, changePensilMode, changeLineMode, deleteLine, cleanLines }) => {

    const [newStrokeWidth, setNewStrokeWidth] = React.useState(strokeWidth)


    const onChangePensilMode = () => {
        changePensilMode(!pensilMode)
        changeLineMode(false)
    }

    const onChangeLineMode = () => {
        changePensilMode(false)
        changeLineMode(!lineMode)
    }

    const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        changePaintbrushColor(e.target.value)
    }

    const onChangeStrokeWidth = (e: any) => {
        setNewStrokeWidth(e.target.value)
    }

    const onUpdateStrokeWidth = () => {
        updateStrokeWidth(newStrokeWidth)
    }

    return <Paint paintbrushColor={paintbrushColor} pensilMode={pensilMode} lineMode={lineMode} strokeWidth={newStrokeWidth}
        onChangeColor={onChangeColor} onChangeStrokeWidth={onChangeStrokeWidth} changePensilMode={onChangePensilMode} 
        changeLineMode={onChangeLineMode} lines={lines} deleteLine={deleteLine} cleanLines={cleanLines} 
        onUpdateStrokeWidth={onUpdateStrokeWidth} />
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        paintbrushColor: getPaintbrushColor(state),
        strokeWidth: getStrokeWidth(state),
        pensilMode: getPensilMode(state),
        lineMode: getLineMode(state),
        lines: getLines(state)
    }
}

export default connect(mapStateToProps, {
    changePaintbrushColor, updateStrokeWidth, changePensilMode, changeLineMode, deleteLine, cleanLines
})(PaintContainer)