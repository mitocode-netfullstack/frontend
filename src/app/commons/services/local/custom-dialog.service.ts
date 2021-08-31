import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { CustomDialogComponent } from '@igmh/components/custom-dialog/custom-dialog.component';
import { IConfigDialog } from '@igmh/interfaces/basic-component-model.interface';
import { Observable } from 'rxjs';

export enum EnumSuccesDialog {
	COMPLETE,
	NO_COMPLETE
}

@Injectable({ providedIn: 'root' })
export class CustomDialogService {
	constructor(private _dialog: MatDialog) { }

	dataAfterClose: unknown;

	private _dialogRef!: MatDialogRef<CustomDialogComponent>;

	private _mediumConf: MatDialogConfig = {
		height: 'auto',
		width: 'auto',
		autoFocus: true,
		disableClose: false,
		panelClass: 'igmh-dialog'
	};

	openQuestion(message: string): Observable<unknown> {
		this._dialogRef = this._dialog.open(CustomDialogComponent, { data: message });
		return this._dialogRef.afterClosed();
	}

	open(config: IConfigDialog): Observable<unknown> {
		this._resetMatDialogConfig();

		this._mediumConf.data = config;

		if (config.disableAutoClose) {
			this._mediumConf.disableClose = config.disableAutoClose;
		}

		this._dialogRef = this._dialog.open(CustomDialogComponent, this._mediumConf);

		return this._dialogRef.afterClosed();
	}

	close(dataAfterClose?: unknown): void {
		this.dataAfterClose = dataAfterClose;
		this._dialogRef.close(this.dataAfterClose);
	}

	private _resetMatDialogConfig(): void {
		this.dataAfterClose = undefined;
		this._mediumConf.disableClose = false;
	}
}
