import {
	AfterViewInit,
	Component,
	ComponentFactoryResolver,
	ComponentRef,
	Inject,
	OnDestroy,
	OnInit,
	ViewChild,
	ViewContainerRef,
	ViewEncapsulation
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomDialogService, EnumSuccesDialog } from '@igmh/services/local/custom-dialog.service';
import { IDataDialog } from '../../models/interfaces/basic-component-model.interface';


@Component({
	selector: 'igmh-custom-dialog',
	templateUrl: './custom-dialog.component.html',
	styleUrls: ['./custom-dialog.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class CustomDialogComponent implements OnDestroy, AfterViewInit, OnInit {

	@ViewChild('component', { read: ViewContainerRef })
	componentTarget!: ViewContainerRef;
	componentRef!: ComponentRef<any>;
	title!: string;
	showQuestion = false;
	constructor(
		private resolver: ComponentFactoryResolver,
		private dialogRef: MatDialogRef<CustomDialogComponent>,
		public customDialogService: CustomDialogService,
		@Inject(MAT_DIALOG_DATA) private _dataDialog: IDataDialog | string
	) { }

	ngOnInit(): void {
		const dataDialog = this._dataDialog as IDataDialog;
		this.showQuestion = dataDialog.component === undefined;
		if (this.showQuestion) {
			this.title = this._dataDialog as string;
		}
	}

	ngAfterViewInit(): void {
		setTimeout(() => {
			this._createComponent();
		}, 0);
	}

	private _createComponent(): void {
		if (this.showQuestion === false) {
			const dataDialog = this._dataDialog as IDataDialog;

			this.componentTarget.clear();
			const factory = this.resolver.resolveComponentFactory(dataDialog.component);
			this.componentRef = this.componentTarget.createComponent(factory);

			this.title = dataDialog.title;
			if (dataDialog.dataTransfer) {
				dataDialog.dataTransfer.forEach((item) => {
					this.componentRef.instance[item.key] = item.value;
				});
			}
		}
	}

	doAction(): void {
		this.dialogRef.close(EnumSuccesDialog.COMPLETE);
	}

	closeDialog(): void {
		this.dialogRef.close(EnumSuccesDialog.NO_COMPLETE);
	}

	ngOnDestroy(): void {
		if (this.componentRef) {
			this.componentRef.destroy();
		}
	}
}
