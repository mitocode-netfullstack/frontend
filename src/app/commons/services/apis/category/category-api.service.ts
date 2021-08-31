import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseCrudApi } from '../base/base-api.class';
import {
    IRequestCreateUpdateCategory,
    IResponseCategoryById,
    IResponseCategoryFindAll
} from './category-api-models.interface';

const CATEGORY = '/Category';

@Injectable({
    providedIn: 'root'
})
export class CategoryApiService extends BaseCrudApi<IRequestCreateUpdateCategory, number, number, IResponseCategoryFindAll, IResponseCategoryById> {
    constructor(protected _httpClient: HttpClient) {
        super(_httpClient);
    }

    getResourceUrl(): string {
        return CATEGORY;
    }
}
