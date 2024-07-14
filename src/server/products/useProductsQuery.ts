import { UseQueryOptions, useQuery } from 'react-query';
import { objectToQueryString } from '~/helpers/objectToQueryString';
import http, { HttpError } from '~/services/httpService';
import queryClient from '~/services/queryClient';
import { IProductParams, TProductSummary, productQueryKey } from './types';

export function useProductsQuery(params?: IProductParams, options?: UseQueryOptions<TProductSummary[], HttpError>) {
	const queryString = objectToQueryString(params);
	const key = [productQueryKey, queryString];
	return useQuery<TProductSummary[], HttpError>(
		key,
		() => http.get<TProductSummary[]>('/products?' + queryString).then(({ data }) => data),
		options
	);
}

export function invalidateProductsQuery() {
	return queryClient.invalidateQueries([productQueryKey]);
}
