import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
	// eslint-disable-next-line @angular-eslint/directive-selector
	selector: '[numeric]'
})
export class NumericDirective {
	constructor(private el: ElementRef<HTMLInputElement>) {}

	@Input() decimals = 0;
	@Input() negative = false;

	private _checkAllowNegative(value: string) {
		if (this.decimals <= 0) {
			return new RegExp(/^-?\d+$/).exec(String(value));
		} else {
			const regExpString = `^-?\\s*((\\d+(\\.\\d{0,${this.decimals}})?)|((\\d*(\\.\\d{1,${this.decimals}}))))\\s*$`;
			return new RegExp(regExpString).exec(String(value));
		}
	}

	private _check(value: string) {
		if (this.decimals <= 0) {
			return new RegExp(/^\d+$/).exec(String(value));
		} else {
			const regExpString = `^\\s*((\\d+(\\.\\d{0,${this.decimals}})?)|((\\d*(\\.\\d{1,${this.decimals}}))))\\s*$`;
			return new RegExp(regExpString).exec(String(value));
		}
	}

	private run(oldValue: string) {
		setTimeout(() => {
			if (this.el) {
				const currentValue = this.el.nativeElement.value;

				if (this.negative) {
					if (!['', '-'].includes(currentValue) && !this._checkAllowNegative(currentValue)) {
						this.el.nativeElement.value = oldValue;
					}
				} else {
					if (currentValue !== '' && !this._check(currentValue)) {
						this.el.nativeElement.value = oldValue;
					}
				}
			}
		});
	}

	@HostListener('keydown', ['$event'])
	onKeyDown(): void {
		this.run(this.el.nativeElement.value);
	}

	@HostListener('paste', ['$event'])
	onPaste(): void {
		this.run(this.el.nativeElement.value);
	}
}
