import { useContext } from 'react';
import { ContextMenu } from '../ContextMenu/ContextMenu.ts';

const useContextMenu = () => useContext(ContextMenu);

export default useContextMenu;