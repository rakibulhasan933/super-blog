import prisma from '@/app/libs/prismadb';
import { BlogProps, SenderProps } from '@/type';
import { NextResponse } from "next/server";

// species Blog POST API
// http://localhost:3000/api/posts/email

export const POST = async (request: any) => {

	const sender: SenderProps = await request.json();
	const senderEmail = sender?.email;
	try {
		const blog = await prisma.blogs.findMany({
			where: {
				email: senderEmail,
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