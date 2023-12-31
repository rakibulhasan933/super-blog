"use client"
import { Inputs } from '@/type';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";



function AddBlog() {
	const { data: user } = useSession();
	const router = useRouter();
	const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			const res = await fetch("/api/posts", {
				method: "POST",
				body: JSON.stringify({
					title: data.title,
					imageUrl: data.imageUrl,
					description: data.description,
					username: user?.user?.name,
					userImage: user?.user?.image,
					email: user?.user?.email,
				})
			});
			if (res.ok) {
				router.push('/dashboard/blogs_list');
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className='mx-[40px]'>
			<div className='flex flex-col px-6'>
				<h2 className='mb-10 text-2xl font-semibold'>Add Blogs</h2>
				<div className="flex flex-col gap-2">
					<form onSubmit={handleSubmit(onSubmit)}>
						<input className='w-full px-4 py-2 my-2 text-lg font-medium border-2 border-teal-400 rounded-md bg-slate-50' placeholder='Title' {...register("title", { required: true })} />
						{errors.title && <span className='my-2 text-red-600'>This field is required</span>}
						<input className='w-full px-4 py-2 my-2 text-lg font-medium border-2 border-teal-400 rounded-md bg-slate-50' placeholder='Enter your Image url' {...register("imageUrl", { required: true })} />
						{errors.imageUrl && <span className='text-red-600'>This field is required</span>}
						<textarea typeof='string' cols={20} rows={5} className='w-full px-4 py-2 my-2 text-lg font-medium border-2 border-teal-400 rounded-md bg-slate-50' placeholder='Enter your message' {...register("description", { required: true })} />
						<br />
						{errors.description && <span className='text-red-600'>This field is required</span>}
						<br />
						<input className='px-4 py-2 my-3 font-bold border-2 border-blue-500 rounded-md cursor-pointer max-w-fit hover:bg-blue-600 hover:text-white' type="submit" />
					</form>
				</div>
			</div>
		</div>
	)
}

export default AddBlog