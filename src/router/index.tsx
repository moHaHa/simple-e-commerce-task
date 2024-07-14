import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import Cart from '~/pages/Cart/Cart';
import Products from '~/pages/Products/Products';
import ProductsNew from '~/pages/ProductsNew/ProductsNew';
import AppLayout from '../layouts/AppLayout/AppLayout';
import AuthLayout from '../layouts/AuthLayout/AuthLayout';
import Home from '../pages/Home/Home';
import Users from '../pages/Users/Users';
import RouterRoot from './RouterRoot';

export const routers = createBrowserRouter([
	{
		path: '/',
		element: <RouterRoot />,
		children: [
			{
				path: '',
				element: <AppLayout></AppLayout>,
				children: [
					{
						path: '',
						element: <Home></Home>,
					},
					{
						path: 'users',
						element: <Users></Users>,
					},
					{
						path: 'products',
						element: <Products></Products>,
					},
					{
						path: 'products/new',
						element: <ProductsNew></ProductsNew>,
					},
					{
						path: 'cart',
						element: <Cart></Cart>,
					},
				],
			},
		],
	},
]);
export const nonAuthRoutes = createBrowserRouter([
	{
		path: '/',
		element: <Outlet></Outlet>,
		children: [
			{
				path: '',
				element: <AuthLayout></AuthLayout>,
				children: [
					{
						path: '',
						element: <Navigate to={'/login'}></Navigate>,
					},
					// {
					// 	path: 'login',
					// 	element: <Login></Login>,
					// },
				],
			},
		],
	},
]);

export default routers;
