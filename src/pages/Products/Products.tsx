import { TableOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Button, Card, Col, Image, Row, Space } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '~/app/context/LayoutContext/AppContext';
import { TProductSummary } from '~/server/products/types';
import { useProductsQuery } from '~/server/products/useProductsQuery';

interface ProductsProps {}

const Products: FC<ProductsProps> = ({}) => {
	const { onRemoveProduct, getIsSelectedProduct, onSelectProduct } = useAppContext();
	const { data, isFetching } = useProductsQuery();
	const columns: ColumnsType<TProductSummary> = [
		{
			title: 'ID',
			dataIndex: 'id',
			key: 'id',
			render: (id, record) => {
				return '#' + id;
			},
		},
		{
			title: 'Title',
			dataIndex: 'title',
			key: 'title',
			render: (_, record) => {
				return _;
			},
		},
		{
			title: 'Price',
			dataIndex: 'price',
			key: 'price',
		},
		{
			title: 'Category',
			dataIndex: 'category',
			key: 'category',
		},
	];

	const [view, setView] = useState<'table' | 'grid'>('grid');
	return (
		<>
			<Card
				title={'Products'}
				extra={
					<Space>
						<Button
							onClick={() => {
								if (view == 'table') setView('grid');
								else setView('table');
							}}
							icon={view == 'table' ? <UnorderedListOutlined /> : <TableOutlined />}
						></Button>
						<Link to={'/products/new'}>
							<Button>Add New </Button>
						</Link>
					</Space>
				}
			>
				{data != undefined && (
					<>
						{view == 'table' ? (
							<Table<TProductSummary> loading={isFetching} dataSource={data ?? []} columns={columns}></Table>
						) : (
							<Row gutter={[24, 24]}>
								{data.map((item) => (
									<Col span={8}>
										<Card title={item.title}>
											<Row justify={'center'}>
												<Col style={{ margin: '30px' }}>
													<Image height={100} src={item.image}></Image>
												</Col>
												<Col span={24}>
													<Row justify={'space-between'}>
														<Col>Price : {item.price}</Col>
														<Col>
															{getIsSelectedProduct(item.id) ? (
																<Button
																	onClick={() => {
																		onRemoveProduct(item.id);
																	}}
																>
																	Remove
																</Button>
															) : (
																<Button
																	onClick={() => {
																		onSelectProduct(item);
																	}}
																	type='primary'
																>
																	Add
																</Button>
															)}
														</Col>
													</Row>
												</Col>
											</Row>
										</Card>
									</Col>
								))}
							</Row>
						)}
					</>
				)}
			</Card>
		</>
	);
};

export default Products;
