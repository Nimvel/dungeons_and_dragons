import { useContext } from 'react';
import { ContextMenu } from '../ContextMenu/ContextMenu';

const useContextMenu = () => useContext(ContextMenu);

export default useContextMenu;