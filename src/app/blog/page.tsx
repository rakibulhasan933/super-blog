import { BlogProps } from '@/type';
import Image from 'next/image'
import React from 'react'


// Blogs Data loaded
async function getData() {
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
						<div key={blog._id} className="flex flex-col border-2 rounded-lg">
							<div className="flex flex-col p-2">
								<div className="flex justify-center">
									<Image src="/hero.png" alt='photo' width={200} priority height={150} />
								</div>
								<p className="my-2 text-base font-normal">Rakibul Hasan</p>
								<h2 className="my-3 text-xl font-semibold">How to Get a Github Student Developer Pack</h2>
								<p className="mb-2 text-xs font-normal">May 24,2023</p>
							</div>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Blog