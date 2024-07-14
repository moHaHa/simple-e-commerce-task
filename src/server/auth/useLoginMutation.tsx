import { UseMutationOptions, useMutation } from 'react-query';
import http, { HttpError } from '~/services/httpService';
import { ILoginMutationResponse, TUserMutation } from './types';

export function useLoginMutation(options?: UseMutationOptions<ILoginMutationResponse, HttpError, TUserMutation>) {
	return useMutation<ILoginMutationResponse, HttpError, TUserMutation>(
		(body) => http.post<ILoginMutationResponse>(`/users`, body).then(({ data }) => data),
		options
	);
}
