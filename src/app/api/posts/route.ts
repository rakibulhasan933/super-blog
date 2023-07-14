import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request: any) => {
	try {
		await connect();
		const users: any = await Post.find();
		return new NextResponse(users, { status: 200 });
	} catch (error) {
		return new NextResponse("Database Error", { status: 500 });
	}
}

export const POST = async (request: any) => {

	try {
		const body = await request.json();
		const newPost = new Post(body);
		await connect();
		const database = await newPost.save();
		console.log(body);

		return NextResponse.json({ "message": "Post has been created" });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ "message": "Database Error" });
	}
};