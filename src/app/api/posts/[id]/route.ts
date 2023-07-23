import prisma from '@/app/libs/prismadb';
import { ParamsIProps } from '@/type';
import { NextResponse } from "next/server";


export const GET = async (request: any, { params }: ParamsIProps) => {

	try {
		const { id } = params;

		const blog = await prisma.Blogs.findUnique({
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

}