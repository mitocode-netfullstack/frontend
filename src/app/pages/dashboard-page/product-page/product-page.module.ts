import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import { ProductComponent } from '@igmh/business/maintenance-flow/product-flow/components/product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponentsModule } from '@igmh/shared/shared-components.module';
import { SharedFormModulesModule } from '@igmh/shared/shared-form-modules.module';
import { GuardCanDeactive } from '@igmh/guards/guard-candeactive.guard';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [{
  path: '',
  component: ProductPageComponent,
  canDeactivate: [GuardCanDeactive]
}];

@NgModule({
  declarations: [
    ProductPageComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    SharedFormModulesModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductPageModule { }
