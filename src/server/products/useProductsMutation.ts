import { UseMutationOptions, useMutation } from 'react-query';
import http, { HttpError } from '~/services/httpService';

export type TProductMutation = {
	title: string;
	price: number;
	description: string;
	image: string;
	category: string;
};

export function useProductMutation(options?: UseMutationOptions<boolean, HttpError, TProductMutation>) {
	return useMutation<boolean, HttpError, TProductMutation>(
		(body) => http.post<boolean>(`/products`, body).then(({ data }) => data),
		options
	);
}
