import mongoose from "mongoose";

interface IUser {
	name: string,
	email: string,
	password: string,
	_id?: string,
}

const { Schema } = mongoose;

const userSchema = new Schema({
	name: {
		type: String,
		unique: true,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	}
});

export default mongoose.model<IUser>("User", userSchema);