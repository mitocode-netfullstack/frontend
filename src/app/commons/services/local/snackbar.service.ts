import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

type TypeSnackBarPositionHorizontal = 'start' | 'center' | 'end' | 'left' | 'right';
type TypeSnackBarPositionVertical = 'top' | 'bottom';
type TypeSnackBarPosition = 'top left' | 'top right' | 'top center' | 'bottom left' | 'bottom right' | 'bottom center';

interface IPosition {
	horizontalPosition: TypeSnackBarPositionHorizontal;
	verticalPosition: TypeSnackBarPositionVertical;
}

@Injectable({
	providedIn: 'root'
})
export class SnackBarService {
	private readonly SNACKBAR_TYPE_INFO = 1;
	private readonly SNACKBAR_TYPE_WARNING = 2;
	private readonly SNACKBAR_TYPE_ERROR = 3;

	constructor(private _snackBar: MatSnackBar) {}

	showInfo(message: string, position: TypeSnackBarPosition, duration?: number): void {
		this._showSnackBar(message, position, this.SNACKBAR_TYPE_INFO, duration);
	}

	showWarning(message: string, position: TypeSnackBarPosition, duration?: number): void {
		this._showSnackBar(message, position, this.SNACKBAR_TYPE_WARNING, duration);
	}

	showError(message: string, position: TypeSnackBarPosition, duration?: number): void {
		this._showSnackBar(message, position, this.SNACKBAR_TYPE_ERROR, duration);
	}

	private _showSnackBar(message: string, position: TypeSnackBarPosition, type: number, duration?: number) {
		if (!duration) duration = 8000;

		const positionSnack = this._getPosition(position);

		this._snackBar.open(message, '', {
			duration: duration,
			horizontalPosition: positionSnack.horizontalPosition,
			verticalPosition: positionSnack.verticalPosition,
			panelClass: this._getClassColor(type)
		});
	}

	private _getPosition(position: TypeSnackBarPosition): IPosition {
		switch (position) {
			case 'bottom center':
				return { horizontalPosition: 'center', verticalPosition: 'bottom' };
			case 'bottom left':
				return { horizontalPosition: 'left', verticalPosition: 'bottom' };
			case 'bottom right':
				return { horizontalPosition: 'right', verticalPosition: 'bottom' };
			case 'top center':
				return { horizontalPosition: 'center', verticalPosition: 'top' };
			case 'top left':
				return { horizontalPosition: 'left', verticalPosition: 'top' };
			default:
				return { horizontalPosition: 'right', verticalPosition: 'top' };
		}
	}

	private _getClassColor(type: number): string {
		switch (type) {
			case 2:
				return 'snackbar-warning';
			case 3:
				return 'snackbar-error';
			default:
				return 'snackbar-info';
		}
	}
}
