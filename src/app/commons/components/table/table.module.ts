import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DataTablePipe } from '@igmh/pipes/data-table.pipe';
import { TableComponent } from './table.component';

@NgModule({
  declarations: [TableComponent, DataTablePipe],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [TableComponent, CommonModule]
})
export class TableModule { }
