import { Button, Card, Col, Image, Row, Space, Typography } from 'antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '~/app/context/LayoutContext/AppContext';

interface CartProps {}

const Cart: FC<CartProps> = ({}) => {
	const { onRemoveProduct, getIsSelectedProduct, onSelectProduct, selectedProducts } = useAppContext();

	return (
		<>
			<Card
				title={'Cart'}
				extra={
					<Space>
						<Typography>Total</Typography>
						<Typography style={{ color: 'red' }}>
							{selectedProducts.reduce((sum, product) => sum + product.price, 0).toFixed(1)} USD
						</Typography>
					</Space>
				}
			>
				<Row gutter={[24, 24]}>
					{selectedProducts.map((item) => (
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
												<Button
													onClick={() => {
														onRemoveProduct(item.id);
													}}
												>
													Remove
												</Button>
											</Col>
										</Row>
									</Col>
								</Row>
							</Card>
						</Col>
					))}
					<Col span={24}>
						<Link to={'/products'}>
							<Button type='primary'>Back To Select </Button>
						</Link>
					</Col>
				</Row>
			</Card>
		</>
	);
};

export default Cart;
