import type { FC } from 'react'
import { Navbar, Card, Breadcrumbs } from '../components'
import { useLocation } from 'react-router-dom'
import { detail } from '../hooks/api'

const Detail: FC = () => {
	const query = useLocation()
	const data = detail(`/${query.pathname.split('/')[2]}`)

	return (
		<div>
			<Navbar />
			{data?.item && (
				<div className='container-show-items'>
					<Breadcrumbs categories={data.categories} />
					<Card item={data?.item} />
				</div>
			)}
		</div>
	)
}

export default Detail
