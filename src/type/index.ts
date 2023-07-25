export interface BlogProps {
	title: string,
	imageUrl: string,
	username: string,
	description: string,
	userImage: string,
	email: string,
	id?: string,
	createdTime?: any,
};
export interface IdIProps {
	id: string;
}

export interface ParamsIProps {
	params: IdIProps;
}
export interface DashBoardProps {
	id: number,
	title: string,
	href: string
};