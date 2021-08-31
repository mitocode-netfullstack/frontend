import { NgModule } from '@angular/core';
import { QuestionSaveDataComponent } from '@igmh/components/question-save-data/question-save-data.component';
import { SearchComponent } from '@igmh/components/search/search.component';
import { TableModule } from '@igmh/components/table/table.module';
import { MAT_PAGINATOR_PROVIDER } from '@igmh/services/local/custom-paginator.service';
import { SharedFormModulesModule } from '@igmh/shared/shared-form-modules.module';
import { CustomLoaderComponent } from '../components/custom-loader/custom-loader.component';

@NgModule({
	declarations: [SearchComponent, CustomLoaderComponent, QuestionSaveDataComponent],
	imports: [SharedFormModulesModule],
	exports: [SearchComponent, TableModule, CustomLoaderComponent, QuestionSaveDataComponent],
	providers: [MAT_PAGINATOR_PROVIDER]
})
export class SharedComponentsModule { }
