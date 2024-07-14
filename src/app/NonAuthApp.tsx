import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import { nonAuthRoutes } from '~/router';

const NonAuthApp: FC = () => {
	return <RouterProvider router={nonAuthRoutes} />;
};

export default NonAuthApp;
