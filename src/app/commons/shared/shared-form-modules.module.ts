import { CommonModule, registerLocaleData } from '@angular/common';
import localeEsPe from '@angular/common/locales/es-PE';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { RouterModule } from '@angular/router';
import { NumericDirective } from '@igmh/pipes/numeric.pipe';
import { CUSTOM_DATEPICKER_FORMATS } from './../utils/format-datepicker';

registerLocaleData(localeEsPe);

@NgModule({
	declarations: [NumericDirective],
	imports: [],
	exports: [
		CommonModule,
		FormsModule,
		FlexLayoutModule,
		MatInputModule,
		MatButtonModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		MatIconModule,
		MatDatepickerModule,
		RouterModule,
		MatCheckboxModule,
		MatSelectModule,
		MatTooltipModule,
		NumericDirective
	],
	providers: [
		{
			provide: DateAdapter,
			useClass: MomentDateAdapter,
			deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
		},

		{ provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATEPICKER_FORMATS }
	]
})
export class SharedFormModulesModule { }
