import { FC, PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { ContextMenu } from './ContextMenu.ts';
import { ContextMenuItem } from './ContextMenu.ts';
import s from './ContextMenu.module.scss'

export const ContextMenuProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
    const [contextMenuItems, setContextMenuItems] = useState<ContextMenuItem[]>([]);
    const [position, setPosition] = useState<number[]>([]);

    const setContextMenu = useCallback((items: ContextMenuItem[], position: number[]) => {
        console.log(items, position)
        setContextMenuItems(items);
        setPosition(position);
    }, [])

    const closeContextMenu = useCallback(() => {
        setPosition(undefined);
    }, [])

    useEffect(() => {
        document.body.addEventListener('click', closeContextMenu);
        return () => {
            document.body.removeEventListener('click', closeContextMenu);
        }
    }, [closeContextMenu])

    return (
        <ContextMenu.Provider value={{setContextMenu}}>
            {!!position && (
                <ul className={s.menu} style={{left: position[0], top: position[1]}}>
                    {contextMenuItems.map(i => <li 
                    key={i.name} onClick={i.onClick}>
                        {i.name}
                    </li>)}
                </ul>
            )}
            {children}
        </ContextMenu.Provider>
    )
}