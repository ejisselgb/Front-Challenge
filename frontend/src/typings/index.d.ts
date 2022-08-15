interface Price {
	currency: string
	amount: number
	decimals: number
}

export interface Products {
	id: string
	title: string
	price: Price
	picture: string
	condition: string
	free_shipping: boolean
	sold_quantity?: number
	description?: string
}

interface Author {
	name: string
	lastname: string
}

export interface Items {
	author: Author
	categories: string[]
	items: Products[]
}

export interface Detail {
	author: Author
	item: Products
	categories: string[]
}
