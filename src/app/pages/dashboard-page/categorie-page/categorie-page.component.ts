import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CategorieComponent } from '@igmh/business/maintenance-flow/categorie-flow/components/categorie/categorie.component';
import { IDataTable } from '@igmh/interfaces/basic-component-model.interface';
import { IResponseCategoryFindAll, CollectionCategory } from '@igmh/services/apis/category/category-api-models.interface';

import { DataService } from '@igmh/services/data.service';
import { EnumSuccesDialog } from '@igmh/services/local/custom-dialog.service';

@Component({
  selector: 'igmh-categorie-page',
  templateUrl: './categorie-page.component.html',
  styleUrls: ['./categorie-page.component.scss', '../../../commons/scss/pages.scss']
})
export class CategoriePageComponent implements OnInit {

  dataSource!: MatTableDataSource<unknown>;
  constructor(private _dataService: DataService) { }

  dataTable!: IDataTable;

  ngOnInit(): void {
    this._findAllCategories();
  }

  private _findAllCategories(): void {
    this._dataService.Category().findAll({ page: 1, rows: 10 }).subscribe((data) => {
      this._loadDataTable(data);
    });
  }

  private _loadDataTable(dataResponse: IResponseCategoryFindAll): void {
    this.dataTable = {
      columns: [
        { title: 'id', width: '0%', hidden: true },
        { title: 'Descripción', width: '60%' },
        { title: 'Categoría', width: '40%' }
      ],
      data: dataResponse.collection
    };
  }

  dataTableDataSourceEvent(event: MatTableDataSource<unknown>): void {
    setTimeout(() => {
      this.dataSource = event;
    }, 0);
  }

  editEvent(e: CollectionCategory): void {
    const afterClosed = this._dataService.Dialog().open({
      component: CategorieComponent,
      title: 'Editar Categoria',
      disableAutoClose: true,
      dataTransfer: [{ key: 'idCategorie', value: e.categoryId }]
    });

    afterClosed.subscribe((succes) => {
      this._succes(succes);
    });
  }

  clickCreateCategorie(): void {
    const afterClosed = this._dataService.Dialog().open({
      component: CategorieComponent,
      title: 'Agregar nueva Categoria',
      disableAutoClose: true
    });

    afterClosed.subscribe((succes) => {
      this._succes(succes);
    });
  }

  deleteEvent(categorieTable: CollectionCategory): void {
    this._dataService.Message().msgConfirm(`¿Esta seguro de eliminar la categoria "${categorieTable.categoryName}"?`,
      () => {
        this._dataService.Category().delete(categorieTable.categoryId).subscribe(() => {
          const message = `La categoria se elimino correctamente.`;
          this._dataService.Message().msgInfo(message, () => { });
          this._findAllCategories();
        });
      }, () => { });
  }

  private _succes(data: unknown): void {
    if (data === EnumSuccesDialog.COMPLETE) {
      this._findAllCategories();
    }
  }
}
