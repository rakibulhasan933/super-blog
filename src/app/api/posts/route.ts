import { NextResponse } from "next/server";

export const GET = async (request: any) => {
	try {
		return NextResponse.json({ message: "GET is Working" });
	} catch (error: any) {
		console.log(error)
		return new NextResponse(error);
	}
}

export const POST = async (request: any) => {

	try {
		const body = await request.json();

		return NextResponse.json(body);
	} catch (error) {
		console.log(error);
		return NextResponse.json(error);
	}
};