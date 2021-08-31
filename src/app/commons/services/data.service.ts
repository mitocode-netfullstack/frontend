import { Injectable } from "@angular/core";
import { CategoryApiService } from "./apis/category/category-api.service";
import { ProductApiService } from "./apis/product/product-api.service";
import { CustomDialogService } from "./local/custom-dialog.service";
import { MessageService } from "./local/message.service";
import { SnackBarService } from "./local/snackbar.service";
import { LocalStorageService } from "./local/storage/local-storage.service";
import { SessionStorageService } from "./local/storage/session-storage.service";

@Injectable({
    providedIn: "root",
})
export class DataService {
    constructor(
        private _product: ProductApiService,
        private _message: MessageService,
        private _snackbar: SnackBarService,
        private _category: CategoryApiService,
        private _customDialog: CustomDialogService,
        private _localStorage: LocalStorageService,
        private _sessionStorage: SessionStorageService,
    ) { }

    Product(): ProductApiService {
        return this._product;
    }

    Message(): MessageService {
        return this._message;
    }

    Snackbar(): SnackBarService {
        return this._snackbar;
    }

    Category(): CategoryApiService {
        return this._category;
    }

    Dialog(): CustomDialogService {
        return this._customDialog;
    }

    LocalStorage(): LocalStorageService {
        return this._localStorage;
    }

    SessionStorage(): SessionStorageService {
        return this._sessionStorage;
    }
}
