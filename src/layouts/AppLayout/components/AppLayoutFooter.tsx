import { Footer } from 'antd/es/layout/layout';
import { FC } from 'react';
interface AppLayoutFooterProps {}
const AppLayoutFooter: FC<AppLayoutFooterProps> = ({}) => {
  return (
    <>
      <Footer style={{ textAlign: 'center' }}>
        Mohaha ©{new Date().getFullYear()}
      </Footer>
    </>
  );
};
export default AppLayoutFooter;
