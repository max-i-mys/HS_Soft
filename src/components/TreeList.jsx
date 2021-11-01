import TreeListItem from './TreeListItem'

export default function TreeList({ items }) {
	return (
		<>
			{items && items.length > 0 && (
				<ul className="list">
					{items.map(item => (
						<TreeListItem key={item.name} item={item} />
					))}
				</ul>
			)}
		</>
	)
}
