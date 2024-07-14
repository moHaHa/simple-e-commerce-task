import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, InputNumber, message, Row, Select, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProductMutation } from '~/server/products/useProductsMutation';

interface ProductsNewProps {}

const ProductsNew: FC<ProductsNewProps> = ({}) => {
	const navigate = useNavigate();
	const { mutate, isLoading } = useProductMutation({
		onSuccess(data) {
			message.success('Created Successfully');
			console.log(data);
			navigate('/products');
		},
	});
	return (
		<>
			<Row gutter={[24, 24]}>
				<Col>
					<Link to={'/products'}>
						<Button size='small' icon={<ArrowLeftOutlined> </ArrowLeftOutlined>}></Button>
					</Link>
				</Col>
				<Col span={24}>
					<Typography.Title level={4}>Add New Product</Typography.Title>
				</Col>
				<Col span={24}>
					<Form onFinish={mutate} layout='vertical'>
						<Form.Item label='Title' name={'title'}>
							<Input></Input>
						</Form.Item>
						<Form.Item label='Price' name={'price'}>
							<InputNumber></InputNumber>
						</Form.Item>
						<Form.Item label='description' name={'description'}>
							<TextArea></TextArea>
						</Form.Item>
						<Form.Item label='category' name={'category'}>
							<Select
								options={[
									{ label: 'Category 1', value: 'category-1' },
									{ label: 'Category 2', value: 'category-2' },
								]}
							></Select>
						</Form.Item>
						<Form.Item>
							<Row justify={'end'}>
								<Col>
									<Button loading={isLoading} type='primary' htmlType='submit'>
										Save
									</Button>
								</Col>
							</Row>
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</>
	);
};

export default ProductsNew;
