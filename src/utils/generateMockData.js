export function generateMockData(n, m, x = 1) {
	const array = []
	for (let i = 0; i < m; i++) {
		array.push({ name: `${x}.${i + 1} Name` })
	}
	if (n === 1) {
		return array
	} else {
		return array.map(item => {
			item.children = generateMockData(n - 1, m, x + 1)
			return item
		})
	}
}
