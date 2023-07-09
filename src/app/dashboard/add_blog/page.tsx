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
		<div className='flex mx-auto'>
			<h2 className='text-3xl font-bold'>Add Blogs</h2>
			<div className="">
				<form onSubmit={handleSubmit(onSubmit)}>
					<input {...register("title", { required: true })} />
					{errors.title && <span>This field is required</span>}
					<input {...register("imageUrl", { required: true })} />
					{errors.imageUrl && <span>This field is required</span>}
					<input {...register("description", { required: true })} />
					{errors.description && <span>This field is required</span>}
					<input type="submit" />
				</form>
			</div>
		</div>
	)
}

export default AddBlog