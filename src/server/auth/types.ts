export type TUserMutation = {
	username: string;
	password: string;
};

export interface ILoginMutationResponse {
	username: string;
	password: string;
	id: string;
	createdAt: string;
}
