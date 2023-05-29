import { DATA_STATE } from '../Utils/dataState';
import { ProductModel } from '../../Models/Product';

async function setProduct({ set, product }: { set: any; product: ProductModel }) {
	return set(() => ({ product: product, loading: DATA_STATE.INITIALIZED }));
}

async function addToCart({ set, product }: { set: any; product: ProductModel }) {
	return set((state: any) => ({
		cart: [...state.cart, { ...product, total: 1 }],
	}));
}

async function deleteFromCart({ set, product }: { set: any; product: ProductModel }) {
	return set((state: any) => ({
		cart: state.cart.filter((item: ProductModel) => item.id !== product.id),
	}));
}

async function addSameProdInCart({ set, product }: { set: any; product: ProductModel }) {
	return set((state: any) => {
		const cart = state.cart.map((item: ProductModel) => {
			if (item.id === product.id) {
				item.total = item.total + 1;
			}
			return item;
		});

		return {
			cart: cart,
		};
	});
}

async function removeSameProdInCart({ set, product }: { set: any; product: ProductModel }) {
	return set((state: any) => {
		let total: number;
		const cart = state.cart.filter((item: ProductModel) => {
			if (item.id === product.id) {
				item.total = item.total - 1;
			}
			return item.total > 0;
		});

		return {
			cart: cart,
		};
	});
}

export const ProductImp = {
	setProduct,
	addToCart,
	deleteFromCart,
	addSameProdInCart,
	removeSameProdInCart,
};
