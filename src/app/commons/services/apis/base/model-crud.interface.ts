export interface IResponseFindAll<T> {
    collection: T[];
    totalPages: number;
}

export interface IRequestListAll {
    filter?: string;
    page?: number;
    rows?: number;
}

export interface IResponseById<T> {
    success: boolean;
    result: T;
}
