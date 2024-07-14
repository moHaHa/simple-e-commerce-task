export const productQueryKey = 'products';
export interface IProductParams {}

export type TProductSummary = {
	category: string;
	description: string;
	id: number;
	image: string;
	price: number;
	rating: { rate: number; count: number };
	title: string;
};
