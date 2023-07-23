export interface BlogProps {
	title: string,
	imageUrl: string,
	username: string,
	description: string,
	userImage: string,
	email: string,
	_id?: string,
	createdTime?: any,
};
export interface IdIProps {
	id: string;
}

export interface ParamsIProps {
	params: IdIProps;
}