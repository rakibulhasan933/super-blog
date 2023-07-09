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
		<div className='mx-[40px]'>
			<h2 className='mb-10 text-xl font-semibold text-center'>Add Blogs</h2>
			<div className='flex flex-col px-6'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input className='w-full px-2 py-1 my-2 border-2 border-blue-500 rounded-md bg-slate-200' {...register("title", { required: true })} />
					{errors.title && <span className='my-2 text-red-600'>This field is required</span>}
					<input className='w-full my-2 border-2 border-blue-500 rounded-md bg-slate-200' {...register("imageUrl", { required: true })} />
					{errors.imageUrl && <span className='text-red-600'>This field is required</span>}
					<textarea className='w-full my-2 border-2 border-blue-500 rounded-md bg-slate-200' {...register("description", { required: true })} />
					{errors.description && <span className='text-red-600'>This field is required</span>}
					<input type="submit" />
				</form>
			</div>
		</div>
	)
}

export default AddBlog