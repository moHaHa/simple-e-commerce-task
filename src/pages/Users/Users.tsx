import { Card, Spin, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { FC } from 'react';
import { usePagination } from '~/hooks/usePagination';
import { TUserSummary } from '~/server/users/types';
import { useUsersQuery } from '~/server/users/useUsersQuery';
interface UsersProps {}
const Users: FC<UsersProps> = ({}) => {
	const { urlQueryParams, setUrlQueryParams } = usePagination();

	const { isLoading, isFetching, data } = useUsersQuery(
		{
			page: urlQueryParams.page,
		},
		{
			keepPreviousData: true,
		}
	);
	const columns: ColumnsType<TUserSummary> = [
		{
			title: 'ID',
			dataIndex: 'id',
			key: 'id',
			render: (id, record) => {
				return '#' + id;
			},
		},
		{
			title: 'First Name',
			dataIndex: 'first_name',
			key: 'first_name',
			render: (_, record) => {
				return _;
			},
		},
		{
			title: 'Last Name',
			dataIndex: 'last_name',
			key: 'last_name',
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
			render: (_, record) => record.email,
		},
	];
	return (
		<Card title={<>Users</>} extra={isLoading && <Spin></Spin>}>
			{data != undefined && (
				<>
					<Table<TUserSummary>
						loading={isFetching}
						dataSource={data.data ?? []}
						columns={columns}
						pagination={{
							pageSize: data.per_page,
							total: data.total,
							current: urlQueryParams.page,
							onChange(page, pageSize) {
								setUrlQueryParams({ page });
							},
						}}
					></Table>
				</>
			)}
		</Card>
	);
};
export default Users;
