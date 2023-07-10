import connect from "@/utils/db";
import { NextResponse } from "next/server";



export const POST = async (request: any) => {
	try {
		const body = await request.json();
		return NextResponse.json({ body });
	} catch (error) {
		console.log(error)
	}
}