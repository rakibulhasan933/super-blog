import { ParamsIProps } from '@/type';
import React from 'react'


async function getBlog(id: string) {
	const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
		cache: "no-store"
	});
	if (!res.ok) {
		throw new Error("Failed to Fetch Data")
	}
	return res.json();
};

async function Blog({ params }: ParamsIProps) {
	const { id } = params;
	const blog = await getBlog(id);
	console.log(blog);
	return (
		<div>
			<div className="flex items-center justify-center">
				<h2 className="my-52">
					<div>
						<h1 className="w-20 h-20 bg-pink-800 loading loading-ring"></h1>
					</div>
				</h2>
			</div>
		</div>
	)
}

export default Blog