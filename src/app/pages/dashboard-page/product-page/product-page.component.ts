import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductComponent } from '@igmh/business/maintenance-flow/product-flow/components/product/product.component';
import { IDataTable } from '@igmh/interfaces/basic-component-model.interface';
import { IResponseProductFindAll, CollectionProduct } from '@igmh/services/apis/product/product-api-models.interface';
import { DataService } from '@igmh/services/data.service';
import { EnumSuccesDialog } from '@igmh/services/local/custom-dialog.service';

@Component({
  selector: 'igmh-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss', '../../../commons/scss/pages.scss']
})
export class ProductPageComponent implements OnInit {
  dataSource!: MatTableDataSource<unknown>;

  constructor(
    private _dataService: DataService
  ) { }


  dataTable!: IDataTable;

  ngOnInit(): void {
    this._findAllProducts();
  }
  private _findAllProducts(): void {
    this._dataService.Product().findAll({ page: 1, rows: 10 }).subscribe((data) => {
      this._loadDataTable(data);
    });
  }

  private _loadDataTable(dataResponse: IResponseProductFindAll): void {
    this.dataTable = {
      columns: [
        { title: 'id', width: '0%', hidden: true },
        { title: 'Nombre', width: '60%' },
        { title: 'Categoría', width: '20%' },
        { title: 'Precio', width: '20%' }
      ],
      data: dataResponse.collection
    };
  }

  dataTableDataSourceEvent(event: MatTableDataSource<unknown>): void {
    setTimeout(() => {
      this.dataSource = event;
    }, 0);
  }

  clickNewProducto(): void {
    const afterClosed = this._dataService.Dialog().open({
      component: ProductComponent,
      title: 'Agregar nuevo Producto',
      disableAutoClose: true
    });

    afterClosed.subscribe((succes) => {
      this._succes(succes);
    });
  }

  editEvent(e: CollectionProduct): void {
    const afterClosed = this._dataService.Dialog().open({
      component: ProductComponent,
      title: 'Editar Producto',
      disableAutoClose: true,
      dataTransfer: [{ key: 'idProduct', value: e.productId }]
    });

    afterClosed.subscribe((succes) => {
      this._succes(succes);
    });
  }

  deleteEvent(productTable: CollectionProduct): void {
    this._dataService.Message().msgConfirm(`¿Esta seguro de eliminar el producto "${productTable.productName}"?`,
      () => {
        this._dataService.Product().delete(productTable.productId).subscribe(() => {
          const message = `El producto se elimino correctamente.`;
          this._dataService.Message().msgInfo(message, () => { });
          this._findAllProducts();
        });
      },
      () => { }
    );
  }

  private _succes(data: unknown): void {
    if (data === EnumSuccesDialog.COMPLETE) {
      this._findAllProducts();
    }
  }
}

