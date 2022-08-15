import type { FC } from 'react'
import { Products } from '../../typings'

interface CardProps {
	item: Products
}

const Card: FC<CardProps> = (props: CardProps) => {
	const {
		picture,
		description,
		condition,
		sold_quantity,
		title,
		price: { amount, decimals },
	} = props.item

	return (
		<div className='container-card'>
			<div className='container-card-info'>
				<div className='w-70'>
					<div className='card-container-img'>
						<img src={picture} />
					</div>
					<div className='container-img-description'>
						<h2>Descripción del producto</h2>
						<p>{description}</p>
					</div>
				</div>
				<div className='w-30'>
					<span className='card-info-title'>
						<span>{condition}</span> -<span> {sold_quantity} vendidos</span>
					</span>
					<div className='mb-50'>
						<p className='card-title'>{title} </p>
						<span className='card-title-amount'>
							$ {(amount / 100).toFixed(decimals)}
							<sup>00</sup>
						</span>
					</div>
					<button className='card-button'>Comprar</button>
				</div>
			</div>
		</div>
	)
}

export default Card
