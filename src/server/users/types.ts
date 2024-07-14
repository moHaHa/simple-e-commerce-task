export const userQueryKey = 'users';
export interface IUserParams {
	page?: number;
}
export type TCurrentUser = {
	username: string;
	password: string;
};

export type TUserSummary = {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	avatar: string;
};
