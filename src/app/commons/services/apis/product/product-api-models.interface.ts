import { IResponseById, IResponseFindAll } from './../base/model-crud.interface';

export interface IRequestCreateUpdateProduct {
	productName: string;
	categoryId: number;
	productPrice: number;
	productEnabled: boolean;
}

export type IResponseProductFindAll = IResponseFindAll<CollectionProduct>;
export type IResponseProductById = IResponseById<Product>;

interface Product {
	productId: number;
	productName: string;
	categoryId: number;
	productPrice: number;
	productEnabled: boolean;
}

export interface CollectionProduct {
	productId: number;
	productName: string;
	category: string;
	unitPrice: number;
}
