import { useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
export type PaginationQueryParams = {
	page?: number;
};
export const usePagination = (config: { initialPage: number } = { initialPage: 1 }) => {
	const location = useLocation();
	const navigate = useNavigate();
	const prevUrlQueryParams = new URLSearchParams(location.search);
	const urlQueryParams: PaginationQueryParams = useMemo(() => {
		return {
			page: (() => {
				const page = prevUrlQueryParams.get('page');
				return page != undefined && typeof +page == 'number' ? +page : undefined;
			})(),
		};
	}, [location.search]);
	const hasParams = useMemo(() => {
		return Object.values(urlQueryParams).findIndex((e) => e != undefined) != -1;
	}, [urlQueryParams]);
	const setUrlQueryParams: (values: PaginationQueryParams) => void = useCallback(
		({ page }: PaginationQueryParams) => {
			const nextSearchParams = new URLSearchParams(location.search);
			nextSearchParams.delete('page');

			if (page != undefined) {
				nextSearchParams.set('page', String(page));
			}

			navigate({ ...location, search: nextSearchParams.toString() });
		},
		[location, navigate]
	);
	return {
		urlQueryParams,
		hasParams,
		setUrlQueryParams,
	};
};
