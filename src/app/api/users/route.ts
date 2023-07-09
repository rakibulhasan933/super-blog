import connect from '@/utils/db'
import { NextResponse } from 'next/server';
import User from '@/models/User';



export const GET = async (request: any) => {

	try {
		await connect();
		const users: any = await User.find();
		return new NextResponse(users, { status: 200 });
	} catch (error) {
		return new NextResponse("Database Error", { status: 500 })
	}
};

export const POST = async (request: any) => {

	const body = await request.json();
	console.log(request);
	return NextResponse.json({ body })
};