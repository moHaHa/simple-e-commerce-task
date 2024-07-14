import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import routers from '~/router';

const AuthApp: FC = () => {
	return (
		<>
			<RouterProvider router={routers} />
		</>
	);
};

export default AuthApp;
