import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardCanLoad } from '@igmh/guards/guard-candload.guard';
import { PATHS_DASHBOARD_PAGES } from '@igmh/utils/path-page';
import { DashboardPageComponent } from './dashboard-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    children: [
      {
        path: PATHS_DASHBOARD_PAGES.productosPage.onlyPath,
        canLoad: [GuardCanLoad],
        loadChildren: () => import('./product-page/product-page.module').then((m) => m.ProductPageModule)
      },
      {
        path: PATHS_DASHBOARD_PAGES.categoriePage.onlyPath,
        loadChildren: () => import('./categorie-page/categorie-page.module').then((m) => m.CategoriePageModule)
      },
      {
      	path: '',
      	redirectTo: PATHS_DASHBOARD_PAGES.onlyPath,
      	pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPageRoutingModule { }
