import { MessageInstance } from 'antd/es/message/interface';
import useMessage from 'antd/es/message/useMessage';
import { FC, ReactNode, createContext, useContext, useState } from 'react';
import { TProductSummary } from '~/server/products/types';

interface AppContextType {
	message: MessageInstance;
	selectedProducts: TProductSummary[];
	onSelectProduct: (product: TProductSummary) => void;
	onRemoveProduct: (id: number) => void;
	getIsSelectedProduct: (id: number) => boolean;
}

const AppContext = createContext({} as AppContextType);

export const AppContextProvider: FC<{ children?: ReactNode }> = ({ children }) => {
	const [message, messageContext] = useMessage();
	const [selectedProducts, setSelectedProducts] = useState<TProductSummary[]>([]);
	const handleOnSelectProduct = (product: TProductSummary) => {
		setSelectedProducts((prev) => [...prev, product]);
	};
	const handleRemoveProduct = (id: number) => {
		setSelectedProducts((prev) => prev.filter((e) => e.id != id));
	};
	const getIsSelectedProduct = (id: number) => {
		return selectedProducts.findIndex((e) => e.id == id) != -1;
	};

	return (
		<AppContext.Provider
			value={{
				selectedProducts,
				message,
				onSelectProduct: handleOnSelectProduct,
				onRemoveProduct: handleRemoveProduct,
				getIsSelectedProduct,
			}}
		>
			{children}
			{messageContext}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	const appContext = useContext(AppContext);

	if (!appContext) {
		throw new Error('useAppContext has to be used within <AppContext.Provider>');
	}

	return appContext;
};
