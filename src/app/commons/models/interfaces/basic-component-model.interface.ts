import { Type } from '@angular/core';

export interface IDataTable {
	columns: IColumn[];
	data: unknown[];
}

export interface IColumn {
	title: string;
	width: string;
	hidden?: boolean;
}
export interface ITransferDataDialog {
	key: string;
	value: unknown;
}

export interface IDataDialog {
	component: Type<unknown>;
	dataTransfer?: ITransferDataDialog[];
	title: string;
}

export interface IConfigDialog extends IDataDialog {
	disableAutoClose?: boolean;
}

//#region  Modelos para manejar el carrito de compras
export interface IChannelProductCheckout {
	idProduct: number;
	description: string;
	unitPrice: number;
}

export interface IChannelBadge {
	quantity: number;
	products: ITableProductCheckout[];
}

export interface ITableProductCheckout {
	idProduct: number;
	description: string;
	quantity: number;
	unitPrice: number;
	total: number;
}
//#endregion
