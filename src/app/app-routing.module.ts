import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PATHS_DASHBOARD_PAGES } from '@igmh/utils/path-page';

const routes: Routes = [
  {
    path: PATHS_DASHBOARD_PAGES.onlyPath,
    loadChildren: () => import('./pages/dashboard-page/dashboard-page.module').then((m) => m.DashboardPageModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: PATHS_DASHBOARD_PAGES.onlyPath }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
