import prisma from '@/app/libs/prismadb';
import { BlogProps, ParamsIProps } from '@/type';
import { NextResponse } from "next/server";

// Single Blog GET API
// https://throughfulpen.vercel.app/api/posts/1234

export const GET = async (request: Request, { params }: ParamsIProps) => {

	try {
		const { id } = params;
		// Params
		// const paramsId = request.url.slice(request.url.lastIndexOf('/') + 1);
		const blog = await prisma.blogs.findUnique({
			where: {
				id,
			}
		});
		if (!blog) {
			return NextResponse.json({ message: "Page Not Found" }, { status: 404 });
		}

		return NextResponse.json({ blog })
	} catch (error) {
		return NextResponse.json({ message: "GET Error", error }, { status: 500 })
	}

};

// Single Blog Updated API
// https://throughfulpen.vercel.app/api/posts/1234

export const PATCH = async (request: any, { params }: ParamsIProps) => {

	try {
		const body: BlogProps = await request.json();

		const { title, imageUrl, description } = body;

		const { id } = params;

		const updatedBlog = await prisma.blogs.update({
			where: {
				id
			},
			data: {
				title,
				description,
				imageUrl
			}
		});
		if (!updatedBlog) {
			return NextResponse.json({ message: "BLog Update Not Found" }, { status: 404 });
		}
		console.log(updatedBlog);
		return NextResponse.json(updatedBlog);
	} catch (error) {
		console.log(error);
		return NextResponse.json({ message: "POST error", error }, { status: 500 });
	}
};

// Single Blog Delete API
// https://throughfulpen.vercel.app/api/posts/1234

export const DELETE = async (request: Request, { params }: ParamsIProps) => {

	try {
		const { id } = params;

		await prisma.blogs.delete({
			where: {
				id,
			}
		});
		return NextResponse.json({ message: "Blog Deleted successfully" })
	} catch (error) {
		return NextResponse.json({ message: "DELETE Error", error }, { status: 500 })
	}
};