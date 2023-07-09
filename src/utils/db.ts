import mongoose from "mongoose";

const connect = async (): Promise<void> => {
	try {
		await mongoose.connect(process.env.MONGODB_URL)
	} catch (error) {
		console.log(error)
		throw new Error("connection failed");
	}
}

export default connect;
