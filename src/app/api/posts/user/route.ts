import prisma from '@/app/libs/prismadb';
import { getServerSession } from "next-auth";
import { options } from "../../auth/[...nextauth]/options";
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const session = await getServerSession(options);
	const userEmail = session?.user?.email as string;
	try {
		const blogs = await prisma.blogs.findMany({
			where: {
				email: userEmail
			}
		});
		if (!blogs) {
			return NextResponse.json({ message: "Page Not Found" }, { status: 404 });
		}
		return NextResponse.json({ blogs })
	} catch (error) {
		return NextResponse.json({ message: "GET Error", error }, { status: 500 })
	}
}