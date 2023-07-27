"use client"
import React from 'react'
import { Inputs } from '@/type';
import { useForm, SubmitHandler } from "react-hook-form";

function UpdateForm() {
	const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			await fetch("/api/posts", {
				method: "POST",
				body: JSON.stringify({
					title: data.title,
					imageUrl: data.imageUrl,
					description: data.description,
				})
			});
		} catch (error) {
			console.log(error);
		}
	}
	return (
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
	)
}

export default UpdateForm