import mongoose from "mongoose";

interface IPosts {
	title: string,
	imageUrl: string,
	description: string,
}

const { Schema } = mongoose;

const postSchema = new Schema({
	title: {
		type: String,
		unique: true,
		required: true,
	},
	imageUrl: {
		type: String,
		unique: true,
		required: true,
	},
	description: {
		type: String,
		unique: true,
		required: true,
	}
});

export default mongoose.model<IPosts>("post", postSchema);