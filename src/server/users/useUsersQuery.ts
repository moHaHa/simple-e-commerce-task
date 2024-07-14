import { UseQueryOptions, useQuery } from 'react-query';
import { objectToQueryString } from '~/helpers/objectToQueryString.ts';
import http, { HttpError } from '~/services/httpService';
import queryClient from '~/services/queryClient.ts';
import { IDataResponse } from '../@shared/types.ts';
import { IUserParams, TUserSummary, userQueryKey } from './types';

export function useUsersQuery(params?: IUserParams, options?: UseQueryOptions<IDataResponse<TUserSummary[]>, HttpError>) {
	const queryString = objectToQueryString(params);
	const key = [userQueryKey, queryString];
	return useQuery<IDataResponse<TUserSummary[]>, HttpError>(
		key,
		() => http.get<IDataResponse<TUserSummary[]>>('/users?' + queryString).then(({ data }) => data),
		options
	);
}

export function invalidateUsersQuery() {
	return queryClient.invalidateQueries([userQueryKey]);
}
