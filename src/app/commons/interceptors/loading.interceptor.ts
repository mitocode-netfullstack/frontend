import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '@igmh/services/local/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

    private countRequest = 0;

    constructor(private loadingService: LoadingService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (!this.countRequest) {
            setTimeout(() => { this.loadingService.show(); }, 0);
        }
        this.countRequest++;

        return next.handle(req).pipe(
            finalize(() => {
                this.countRequest--;
                if (!this.countRequest) {
                    setTimeout(() => { this.loadingService.hide();}, 0);
                }
            })
        )
    }
}