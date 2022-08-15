import { Route, Routes } from 'react-router-dom'
import { Home, Result, Detail } from './views'
import { NotFound } from './components'

function App() {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path='items' element={<Result />} />
			<Route path='items/:id' element={<Detail />} />
			<Route path='*' element={<NotFound showNavbar={true} />} />
		</Routes>
	)
}

export default App
