import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { DataService } from '@igmh/services/data.service';
import { ProductPageComponent } from 'src/app/pages/dashboard-page/product-page/product-page.component';

@Injectable({
	providedIn: 'root'
})
export class GuardCanDeactive implements CanDeactivate<ProductPageComponent> {
	constructor(private _dataService: DataService) { }
	canDeactivate(component: ProductPageComponent): boolean {
		return true;
		// return this._dataService.Message().msgConfirmGuard('¿Estas seguro que deseas salir?', () => {
		// 	return true;
		// }, () => {
		// 	return false;
		// });
	}
}
