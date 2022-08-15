import type { FC } from 'react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LogoML from '../../assets/Logo_ML.png'

const Navbar: FC = () => {
	const [valueInput, setValueInput] = useState('')

	const navigate = useNavigate()
	const makeSearch = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (valueInput) {
			navigate(`/items?search=${valueInput.trim()}`)
		}
	}

	return (
		<header className='nav-header'>
			<div className='container'>
				<div className='row'>
					<form className='flex padding pa' onSubmit={makeSearch}>
						<a href='/' className='flex'>
							<img
								src={LogoML}
								alt='Mercado Libre Logo'
								className='nav-bar obj-fit vertical-align'
							/>
						</a>
						<div className='flex padding pa'>
							<input
								className='input-search'
								type='text'
								placeholder='Nunca dejes de buscar'
								onChange={e => setValueInput(e.target.value)}
								value={valueInput}
							/>
							<button className='search-button' type='submit' />
						</div>
					</form>
				</div>
			</div>
		</header>
	)
}

export default Navbar
