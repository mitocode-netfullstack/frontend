import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRequestCreateUpdateCategory } from '@igmh/services/apis/category/category-api-models.interface';
import { DataService } from '@igmh/services/data.service';
import { EnumSuccesDialog } from '@igmh/services/local/custom-dialog.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class CategorieFlowService {
    constructor(
        private _formBuilder: FormBuilder,
        private _dataService: DataService
    ) { }

    formGroup!: FormGroup;
    showLoader = false;

    loadFormGroup(): void {
        this.formGroup = this._formBuilder.group({
            name: [null, Validators.required],
            description: [null, Validators.required]
        });
    }

    loadDataFormGroup(id: number): void {
        this._dataService.Category().findById(id).subscribe((data) => {
            this.formGroup.patchValue({
                name: data.result.categoryName,
                description: data.result.categoryDescription
            });
        });
    }

    registerCategorie(idCategorie: number): void {
        this._createUpdateCategorie(idCategorie);
    }

    private _createUpdateCategorie(idCategorie: number): void {
        if (this.formGroup.valid) {
            this.showLoader = true;
            const sendCategorie = this.formGroup.value as IRequestCreateUpdateCategory;
            if (idCategorie) {
                this._updateCategorie(idCategorie, sendCategorie);
            } else {
                this._createCategorie(sendCategorie);
            }
        }
    }

    private _updateCategorie(idCategorie: number, sendCategorie: IRequestCreateUpdateCategory): void {
        this._dataService.Category()
            .update(idCategorie, sendCategorie)
            .pipe(
                finalize(() => {
                    this._dataService.Dialog().close(EnumSuccesDialog.COMPLETE);
                })
            )
            .subscribe(() => {
                this._succesCustomer(sendCategorie.name);
            });
    }

    private _createCategorie(sendCategorie: IRequestCreateUpdateCategory): void {
        this._dataService.Category()
            .create(sendCategorie)
            .pipe(
                finalize(() => {
                    this.showLoader = false;
                    this._dataService.Dialog().dataAfterClose = EnumSuccesDialog.COMPLETE;
                })
            )
            .subscribe(() => {
                this._succesCustomer(sendCategorie.name);
            });
    }

    private _succesCustomer(nameCategorie: string): void {
        const message = `La categoría con nombre "${nameCategorie}" se guardo correctamente.`;
        this._dataService.Message().msgInfo(message, () => { });
        this.formGroup.reset();
    }
}
