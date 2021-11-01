import { useState, useEffect } from 'react'
import { useTreeList } from '../hooks/useTreeList'
import TreeList from './TreeList'

export default function TreeListItem({ item }) {
	const [closed, setClosed] = useTreeList()
	const [open, setOpen] = useState(false)
	const hasChildren = item.children && item.children.length > 0

	useEffect(() => {
		if (open) {
			setClosed(false)
		}
	}, [open, setClosed])

	useEffect(() => {
		if (closed) {
			setOpen(false)
		}
	}, [closed])

	function toggle() {
		if (!hasChildren) {
			setClosed(true)
		} else {
			setOpen(p => !p)
		}
	}
	return (
		<li className="list-item">
			<span className="list-item__name" onClick={toggle}>
				{item.name} {hasChildren && (!open ? <>&#9660;</> : <>&#9650;</>)}
			</span>
			{open && hasChildren && <TreeList items={item.children} />}
		</li>
	)
}
