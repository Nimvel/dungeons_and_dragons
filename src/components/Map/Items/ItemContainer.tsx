// import * as React from 'react'
// import { FC } from 'react'
// import { connect } from 'react-redux'
// import Item from './Item'

// import { AppStateType } from '../../../redux/store'

// import { ItemType, updateItems } from '../../../redux/map-reducer'

// import { getItems } from '../../../redux/map-selectors'

// import { getGridSize } from '../../../redux/options-selectors'


// type MapStateToPropsType = {
//     gridSize: number

//     items: Array<ItemType>
// }

// type MapDispatchToPropsType = {
//     updateItems: (items: Array<ItemType>) => void
// }

// type OwnPropsType = {
//     item: ItemType

//     activeCircleId: null | string
//     setActiveCircleId: React.Dispatch<any>
//     handleContextMenu: (e: any) => void
//     touchContextMenu: (e: any) => void
// }

// type ItemContainerProps = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

// const ItemContainer: FC<ItemContainerProps> = ({ item, gridSize, items, activeCircleId, setActiveCircleId, handleContextMenu, touchContextMenu, updateItems }) => {

//     React.useEffect(() => {}, [activeCircleId])

//     return <Item item={item} items={items} gridSize={gridSize} 
//     setActiveCircleId={setActiveCircleId} handleContextMenu={handleContextMenu} 
//     touchContextMenu={touchContextMenu} updateItems={updateItems} />
// }

// const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
//     return {
//         items: getItems(state),
//         gridSize: getGridSize(state)
//     }
// }

// export default connect(mapStateToProps, { updateItems })(ItemContainer)