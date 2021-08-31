import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DataService } from '@igmh/services/data.service';
import { Router } from '@angular/router';


@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

    constructor(private _dataService: DataService, private _router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((e: HttpErrorResponse) => {
                this._dataService.Message().msgError('Error del servidor', () => { this._router.navigate(["dashboard"]); });
                return throwError(e);
            })
        );
    }
}
