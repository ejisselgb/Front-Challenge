import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/styles.scss'
import 'font-awesome/css/font-awesome.min.css'

import App from './App'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement as HTMLElement)

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)
