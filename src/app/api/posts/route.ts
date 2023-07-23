import prisma from '@/app/libs/prismadb';
import { BlogProps } from '@/type';
import { NextResponse } from "next/server";

export const GET = async (request: any) => {
	try {
		const blogs: BlogProps[] = await prisma.Blogs.findMany();
		return NextResponse.json(blogs);
	} catch (error) {
		return NextResponse.json({ message: "GET error", error }, { status: 500 })
	}
}

export const POST = async (request: any) => {

	try {
		const body: BlogProps = await request.json();

		const { title, imageUrl, description, username, userImage, email } = body;

		const newBlog = await prisma.Blogs.create({
			data: {
				title,
				description,
				imageUrl,
				username,
				userImage,
				email
			}
		});
		console.log(newBlog);
		return NextResponse.json(newBlog);
	} catch (error) {
		console.log(error);
		return NextResponse.json({ message: "POST error", error }, { status: 500 });
	}
};