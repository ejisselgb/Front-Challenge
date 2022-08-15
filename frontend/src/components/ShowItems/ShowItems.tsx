import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Products } from '../../typings'
import shipping from '../../assets/ic_shipping.png'

interface ShowItemsProps {
	items: Products[]
}

const ShowItems: FC<ShowItemsProps> = (props: ShowItemsProps) => {
	const navigate = useNavigate()

	const items = props.items.map((item: Products) => {
		const {
			id,
			picture,
			price: { amount, decimals },
			title,
			free_shipping,
		} = item
		return (
			<li
				key={id}
				onClick={() => {
					navigate(`/items/${id}`)
				}}
			>
				<div className='container-item'>
					<div className='w-20 flex-container'>
						<img className='img-container' src={picture} alt={title} />
					</div>
					<div className='w-60 pl-30'>
						<div>
							<span className='tag-price'>
								<span className='tag-simbol'>$</span>
								<span className='tag-simbol'>
									{(amount / 100).toFixed(decimals)}
								</span>
								{free_shipping && (
									<span>
										<img src={shipping} alt={title} />
									</span>
								)}
							</span>
						</div>
						<div className='tag-title'>
							<span>{title}</span>
						</div>
					</div>
					<div className='w-20 pt-30'>
						<span className='tag-city'>Capital Federal</span>
					</div>
				</div>
			</li>
		)
	})
	return <ol className='container-list'>{items}</ol>
}

export default ShowItems
