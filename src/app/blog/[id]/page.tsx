import { BlogProps, ParamsIProps } from '@/type';
import Image from 'next/image';
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
	const blogs = await getBlog(id);
	const data: BlogProps = blogs.blog;
	return (
		<div className='mx-auto my-20'>
			<div className="flex flex-col">
				<div className="flex flex-row items-center p-4">
					<div className="w-1/3 ">
						<Image src={data.imageUrl} alt='photo' className='object-contain rounded-md ' width={300} priority height={300} />
					</div>
					<div className="w-2/3 py-4">
						<div className="flex flex-col">
							<h2 className="mb-6 text-2xl font-semibold">{data.title}</h2>
							<div className="flex flex-row mb-4">
								<div className="avatar">
									<div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
										<Image src={data.userImage} className='rounded-full' alt='profile' fill />
									</div>
								</div>
								<h2 className="px-4 my-4 text-lg font-medium">{data.username}</h2>
							</div>
							<p className="my-4">{data.createdTime}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Blog