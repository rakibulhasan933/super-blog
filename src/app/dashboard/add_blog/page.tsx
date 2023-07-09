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
		<div className='flex flex-col gap-5 mx-auto'>
			<h2 className='my-5 text-3xl font-bold text-center'>Add Blogs</h2>
			<div className="">
				<form className='flex flex-col w-full gap-4' onSubmit={handleSubmit(onSubmit)}>
					<input className='border-2 border-black' {...register("title", { required: true })} />
					{errors.title && <span>This field is required</span>}
					<input className='border-2 border-black' {...register("imageUrl", { required: true })} />
					{errors.imageUrl && <span>This field is required</span>}
					<textarea className='border-2 border-black' {...register("description", { required: true })} />
					{errors.description && <span>This field is required</span>}
					<input type="submit" />
				</form>
			</div>
		</div>
	)
}

export default AddBlog