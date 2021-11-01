import { useContext } from 'react';
import { TreeListContext } from '../context/TreeListContext';

export function useTreeList() {
	return useContext(TreeListContext);
}
