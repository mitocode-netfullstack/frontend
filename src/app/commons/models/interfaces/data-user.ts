export interface IDataUser {
	userId: string;
	userCode: string;
	fullName: string;
	modules: Module[];
	customerId: number;
}

interface Module {
	name: string;
	url: string;
}

export interface ITokenUser {
	token: string;
	expiredDate: string;
}
