import { BlogProps } from '@/type';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'


// Blogs Data loaded
export async function getData() {
	const res = await fetch("http://localhost:3000/api/posts", {
		cache: "no-store",
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
};


async function Blog() {
	const data: BlogProps[] = await getData();
	return (
		<div className='m-10'>
			<div className="grid grid-cols-3 gap-4">
				{
					data && data.map((blog) => (
						<section key={blog.id} className="flex flex-col border-2 rounded-lg">
							<Link href={`blog/${blog?.id}`}>
								<div className="flex flex-col p-2">
									<div className="flex justify-center">
										<Image src={blog?.imageUrl} className='w-full' alt='photo' width={200} priority height={150} />
									</div>
									<p className="my-2 text-base font-normal">{blog.username.toLocaleUpperCase()}</p>
									<h2 className="my-3 text-xl font-semibold">{blog.title}</h2>
									<p className="mb-2 text-xs font-normal">{blog.createdTime}</p>
								</div>
							</Link>
						</section>
					))
				}
			</div>
		</div>
	)
}

export default Blog