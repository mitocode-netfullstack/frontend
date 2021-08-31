import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRequestCreateUpdateProduct } from '@igmh/services/apis/product/product-api-models.interface';
import { DataService } from '@igmh/services/data.service';
import { EnumSuccesDialog } from '@igmh/services/local/custom-dialog.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class ProductFlowService {
	constructor(
		private _formBuilder: FormBuilder,
		private _dataService: DataService,
	) {}

	formGroup!: FormGroup;
	showLoader = false;
	loadFormGroup(): void {
		this.formGroup = this._formBuilder.group({
			productName: [null, Validators.required],
			categoryId: [null, Validators.required],
			productPrice: [null, Validators.required],
			productEnabled: [false, Validators.required],
		});
	}

	registerProduct(idProduct: number): void {
		this._createUpdateProduct(idProduct);
	}

	private _createUpdateProduct(idProduct: number): void {
		if (this.formGroup.valid) {
			this.showLoader = true;
			const sendProduct = this.formGroup.value as IRequestCreateUpdateProduct;
			if (idProduct) {
				this._updateProduct(idProduct, sendProduct);
			} else {
				this._createProduct(sendProduct);
			}
		}
	}

	private _updateProduct(idProduct: number, sendProduct: IRequestCreateUpdateProduct): void {
		this._dataService.Product()
			.update(idProduct, sendProduct)
			.pipe(
				finalize(() => {
					this._dataService.Dialog().close(EnumSuccesDialog.COMPLETE);
				})
			)
			.subscribe(() => {
				this._succesProduct(sendProduct.productName);
			});
	}

	private _createProduct(sendProduct: IRequestCreateUpdateProduct): void {
		this._dataService.Product()
			.create(sendProduct)
			.pipe(
				finalize(() => {
					this.showLoader = false;
					this._dataService.Dialog().dataAfterClose = EnumSuccesDialog.COMPLETE;
				})
			)
			.subscribe(() => {
				this._succesProduct(sendProduct.productName);
			});
	}

	private _succesProduct(nameProduct: string): void {
		const message = `El producto con nombre "${nameProduct}" se guardo correctamente.`;
		this._dataService.Message().msgInfo(message,()=>{});
		this.formGroup.reset();
	}

	loadDataFormGroup(id: number): void {
		this._dataService.Product().findById(id).subscribe((data) => {
			this.formGroup.patchValue(data.result);		
		});
	}

	get nameField(): AbstractControl {
		return this.formGroup.get('productName')!;
	}

	get categorieField(): AbstractControl {
		return this.formGroup.get('categoryId')!;
	}

	get fileNameField(): AbstractControl {
		return this.formGroup.get('fileName')!;
	}

	get priceField(): AbstractControl {
		return this.formGroup.get('productPrice')!;
	}
}
