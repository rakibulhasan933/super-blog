import prisma from '@/app/libs/prismadb';
import { BlogProps } from '@/type';
import { NextResponse } from "next/server";

// ALL Blog GET API
// https://throughfulpen.vercel.app/api/posts

export const GET = async (request: Request) => {
	try {
		const blogs: BlogProps[] = await prisma.blogs.findMany();
		return NextResponse.json(blogs);
	} catch (error) {
		return NextResponse.json({ message: "GET error", error }, { status: 500 })
	}
}
//  Blog POST API
// https://throughfulpen.vercel.app/api/posts
export const POST = async (request: Request) => {

	try {
		const body: BlogProps = await request.json();

		const { title, imageUrl, description, username, userImage, email } = body;

		const newBlog = await prisma.blogs.create({
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
		return NextResponse.json({ message: "POST error", error }, { status: 500 });
	}
};