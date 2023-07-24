import { ParamsIProps } from '@/type'
import React from 'react'

function Blog({ params }: ParamsIProps) {
	const { id } = params;
	return (
		<div>Welcome to Single Blog Page :{id} </div>
	)
}

export default Blog