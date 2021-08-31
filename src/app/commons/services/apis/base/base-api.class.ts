import { HttpClient } from '@angular/common/http';
import { environment } from '@igmh/environments/environment';
import { Utils } from '@igmh/utils/utils';
import { Observable } from 'rxjs';
import { IRequestListAll } from './model-crud.interface';

export abstract class BaseCrudApi<
    RequestUpdateCreate,
    ResponseUpdateCreate,
    ResponsetDelete,
    ResponseAll,
    ResponseFindById
    > {
    private readonly APIUrl = `${environment.host}${environment.api}${this.getResourceUrl()}`;

    abstract getResourceUrl(): string;

    constructor(protected _httpClient: HttpClient) { }

    create(requestData: RequestUpdateCreate): Observable<ResponseUpdateCreate> {
        return this._httpClient.post<ResponseUpdateCreate>(this.APIUrl, requestData);
    }

    update(id: number, requestData: Partial<RequestUpdateCreate>): Observable<ResponseUpdateCreate> {
        const url = `${this.APIUrl}/${id}`;
        return this._httpClient.put<ResponseUpdateCreate>(url, requestData);
    }

    delete(id: number): Observable<ResponsetDelete> {
        const url = `${this.APIUrl}/${id}`;
        return this._httpClient.delete<ResponsetDelete>(url);
    }

    findAll(request?: IRequestListAll): Observable<ResponseAll> {
        const url = Utils.concatQueryUrl(`${this.APIUrl}`, request);
        return this._httpClient.get<ResponseAll>(url);
    }

    findById(id: number): Observable<ResponseFindById> {
        const url = `${this.APIUrl}/${id}`;
        return this._httpClient.get<ResponseFindById>(url);
    }
}
