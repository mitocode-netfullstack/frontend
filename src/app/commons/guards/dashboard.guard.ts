import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { MessageService } from '@igmh/services/local/message.service';

@Injectable({
    providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
    constructor(
        private _messageService: MessageService,
        private _router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {      
        return true;
    }
}
