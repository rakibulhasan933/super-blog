import UpdateForm from '@/components/UpdateForm';
import { BlogProps, ParamsIProps } from '@/type';

async function getSingleBlog(id: string) {
	const res = await fetch(`https://throughfulpen.vercel.app/api/posts/${id}`);
	return res.json();
}

async function UpdatedBlog({ params }: ParamsIProps) {
	const { id } = params;
	const data = await getSingleBlog(id);
	const blog: BlogProps = data.blog;
	return (
		<div className='mx-[40px]'>
			<div className='flex flex-col px-6'>
				<h2 className='mb-10 text-2xl font-semibold'>Update Blogs</h2>
				<div className="flex flex-col gap-2">
					<UpdateForm updateBlog={blog} />
				</div>
			</div>
		</div>
	)
}

export default UpdatedBlog