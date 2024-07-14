import { ConfigProvider } from 'antd';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import App from './app/App.tsx';
import { AppContextProvider } from './app/context/LayoutContext/AppContext.tsx';
import './index.css';
import queryClient from './services/queryClient.ts';
import { theme } from './theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ConfigProvider theme={theme}>
		<QueryClientProvider client={queryClient}>
			<AppContextProvider>
				<App />
			</AppContextProvider>
		</QueryClientProvider>
	</ConfigProvider>
);
