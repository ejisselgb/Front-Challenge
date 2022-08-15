import type { FC } from 'react'
interface BreadcrumbsProps {
	categories: string[]
}

export const Breadcrumbs: FC<BreadcrumbsProps> = (props: BreadcrumbsProps) => {
	const breadcrumbs = props.categories.map((item: string, i: number) => {
		return (
			<li key={i}>
				<span>{item}</span>
			</li>
		)
	})

	return (
		<div>
			<ol className='breadcrumbs'>{breadcrumbs}</ol>
		</div>
	)
}

export default Breadcrumbs
