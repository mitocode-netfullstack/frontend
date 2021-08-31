import { NgModule } from '@angular/core';
import { CategoriePageComponent } from './categorie-page.component';
import { CategorieComponent } from '@igmh/business/maintenance-flow/categorie-flow/components/categorie/categorie.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponentsModule } from '@igmh/shared/shared-components.module';
import { SharedFormModulesModule } from '@igmh/shared/shared-form-modules.module';

const routes: Routes = [{
  path: '',
  component: CategoriePageComponent
}];

@NgModule({
  declarations: [
    CategoriePageComponent,
    CategorieComponent
  ],
  imports: [
    SharedComponentsModule,
    SharedFormModulesModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class CategoriePageModule { }
