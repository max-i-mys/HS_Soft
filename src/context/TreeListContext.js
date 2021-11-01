import { useState,createContext } from 'react';

export const TreeListContext = createContext();

export default function TreeListProvider({children}) {
	const [closed, setClosed] = useState(true)
	return <TreeListContext.Provider value={[closed, setClosed]}>{children}</TreeListContext.Provider>
}
