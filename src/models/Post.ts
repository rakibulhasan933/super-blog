import mongoose from "mongoose";


interface IPosts {
	title: string,
	imageUrl: string,
	description: string,
	username: string,
	userImage: string,
	email: string,
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
	},
	username: {
		type: String,
		unique: true,
		required: true,
	},
	userImage: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	}
});

export default mongoose.models.Post<IPosts> || mongoose.model<IPosts>("Post", postSchema);