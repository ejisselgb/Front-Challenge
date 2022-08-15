import type { FC } from 'react'
import { Breadcrumbs, Navbar, ShowItems, NotFound } from '../components'
import { search } from '../hooks/api'
import { useLocation } from 'react-router-dom'

const Detail: FC = () => {
	const query = useLocation()
	const searchString = query.search.replace('search', 'q')
	const data = search(searchString)

	return (
		<div>
			<Navbar />
			{data &&
				(!data.items.length ? (
					<NotFound showNavbar={false} />
				) : (
					<div className='container-show-items'>
						<Breadcrumbs categories={data.categories} />
						<ShowItems items={data.items} />
					</div>
				))}
		</div>
	)
}

export default Detail
