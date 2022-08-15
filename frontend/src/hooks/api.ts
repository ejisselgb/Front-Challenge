import { useState, useEffect } from 'react'
import { get } from '../services/get'
import { Items, Detail } from '../typings'

const baseUrl = "/api/items"

export const search = (textSearch: string | null) => {
	const [result, setResult] = useState<Items>()

	useEffect(() => {
		if (textSearch) {
			get(`${baseUrl}${encodeURI(textSearch)}`).then(data => {
				setResult(data)
			})
		}
	}, [textSearch])
	return result
}

export const detail = (textSearch: string | null) => {
	const [result, setResult] = useState<Detail>()

	useEffect(() => {
		if (textSearch) {
			get(`${baseUrl}${encodeURI(textSearch)}`).then(data => {
				setResult(data)
			})
		}
	}, [textSearch])
	return result
}
