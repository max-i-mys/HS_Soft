import './App.css'
import { useQuery, gql } from '@apollo/client'
import TreeList from './components/TreeList'
import TreeListProvider from './context/TreeListContext'
import { generateMockData } from './utils/generateMockData'
import { useEffect } from 'react'

const CONTINENTS = gql`
	query {
		continents {
			name
			children: countries {
				name
				children: languages {
					name
				}
			}
		}
	}
`

function App() {
	useEffect(() => {
		console.log(generateMockData(5, 3))
	}, [])

	const { loading, error, data } = useQuery(CONTINENTS)
	if (loading) return <p>Loading...</p>
	if (error) return <p>Error :(</p>
	return (
		<div className="app">
			<TreeListProvider>
				<TreeList items={data.continents} />
			</TreeListProvider>
		</div>
	)
}

export default App
