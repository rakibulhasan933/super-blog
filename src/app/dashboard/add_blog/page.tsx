"use client"
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
	title: string,
	imageUrl: string,
	description: string,
};

function AddBlog() {
	const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

	return (
		<div className='mx-[40px] h-min'>
			<div className='flex flex-col px-6'>
				<h2 className='mb-10 text-xl font-semibold'>Add Blogs</h2>
				<div className="flex flex-col gap-2">
					<form onSubmit={handleSubmit(onSubmit)}>
						<input className='w-full px-4 py-2 my-2 border-2 border-teal-400 rounded-md bg-slate-50' placeholder='Title' {...register("title", { required: true })} />
						{errors.title && <span className='my-2 text-red-600'>This field is required</span>}
						<input className='w-full px-4 py-2 my-2 border-2 border-teal-400 rounded-md bg-slate-50' placeholder='Enter your Image url' {...register("imageUrl", { required: true })} />
						{errors.imageUrl && <span className='text-red-600'>This field is required</span>}
						<textarea className='w-full px-4 py-2 my-2 border-2 border-teal-400 rounded-md bg-slate-50' placeholder='Enter your message' {...register("description", { required: true })} />
						<br />
						{errors.description && <span className='text-red-600'>This field is required</span>}
						<br />
						<input className='px-4 py-2 my-3 font-bold border-2 border-blue-500 rounded-md max-w-fit hover:bg-blue-600 hover:text-white' type="submit" />
					</form>
				</div>
			</div>
		</div>
	)
}

export default AddBlog