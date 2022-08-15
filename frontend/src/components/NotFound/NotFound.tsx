import type { FC } from 'react'
import SearchNotFound from '../../assets/search_notfound.png'
import Navbar from '../Navbar/Navbar'

interface NotFoundProps {
	showNavbar: boolean
}

const NotFound: FC<NotFoundProps> = (props: NotFoundProps) => {
	return (
		<div>
			{props.showNavbar && <Navbar />}
			<div className='container-notfound'>
				<div className='container-notfound-img'>
					<img src={SearchNotFound} />
				</div>
				<div className='container-notfound-txt'>
					<h3>Escribe en el buscador lo que quieres encontrar.</h3>
					<ul>
						<li>
							Escribe tu búsqueda en el campo que figura en la parte superior de
							la pantalla.
						</li>
						<li>
							<a href='/'>Navega por categorías de productos</a> para encontrar
							el producto que buscas.
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default NotFound
