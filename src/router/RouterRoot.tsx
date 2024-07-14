import { FC } from 'react';
import { Outlet } from 'react-router-dom';
interface RouterRootProps {}
const RouterRoot: FC<RouterRootProps> = ({}) => {
  return <Outlet></Outlet>;
};
export default RouterRoot;
