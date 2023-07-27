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
export interface SenderProps {
	email: string,
}
export interface deleteBlogsProps {
	id: string;
	title: string;
}

export interface PopupProps {
	isOpen: boolean;
	onClose: () => void;
	deleteId: string;
	deleteTitle: string;
	email: string;
	userSender: (email: string) => Promise<Error | undefined>
};
export interface Inputs {
	title: string,
	imageUrl: string,
	description: string,
};