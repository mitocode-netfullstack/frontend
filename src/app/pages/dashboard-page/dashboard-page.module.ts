import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CustomDialogComponent } from '@igmh/components/custom-dialog/custom-dialog.component';
import { MenuModule } from '@igmh/components/menu/menu.module';
import { SharedComponentsModule } from '@igmh/shared/shared-components.module';
import { DashboardPageRoutingModule } from './dashboard-page-routing.module';
import { DashboardPageComponent } from './dashboard-page.component';

@NgModule({
  declarations: [DashboardPageComponent, CustomDialogComponent],
  imports: [
    CommonModule,
    DashboardPageRoutingModule,
    MatToolbarModule,
    SharedComponentsModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    MenuModule,
    MatBadgeModule,
    MatMenuModule
  ],
  providers: []
})
export class DashboardPageModule { }
