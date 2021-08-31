import { IResponseById, IResponseFindAll } from './../base/model-crud.interface';

export interface IRequestCreateUpdateCategory {
    name: string;
    description: string;
}
export type IResponseCategoryFindAll = IResponseFindAll<CollectionCategory>;
export type IResponseCategoryById = IResponseById<CollectionCategory>;

export interface CollectionCategory {
    categoryDescription: string;
    categoryId: number;
    categoryName: string;
}
