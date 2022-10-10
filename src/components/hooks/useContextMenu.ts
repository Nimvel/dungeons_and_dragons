import { useContext } from 'react';
import { ContextMenu } from '../context/ContextMenu/ContextMenu.ts';

const useContextMenu = () => useContext(ContextMenu);

export default useContextMenu;