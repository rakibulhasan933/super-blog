import UpdateForm from '@/components/UpdateForm';
import { ParamsIProps } from '@/type';

async function getSingleBlog(id: string) {
	const res = await fetch(`http://localhost:3000/api/posts/${id}`);
	return res.json();
}

async function UpdatedBlog({ params }: ParamsIProps) {
	const { id } = params;
	const data = await getSingleBlog(id);
	console.log(data, 'single blogs update page');
	return (
		<div className='mx-[40px]'>
			<div className='flex flex-col px-6'>
				<h2 className='mb-10 text-2xl font-semibold'>Update Blogs</h2>
				<div className="flex flex-col gap-2">
					<UpdateForm />
				</div>
			</div>
		</div>
	)
}

export default UpdatedBlog