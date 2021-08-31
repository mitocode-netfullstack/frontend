import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IColumn, IDataTable } from '../../models/interfaces/basic-component-model.interface';

@Component({
  selector: 'igmh-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnChanges {
  @Input() dataTable!: IDataTable;
  @Input() showActions = true;
  @Input() showButtonEdit = true;
  @Input() showButtonDelete = true;
  @Input() showButtonViewDetail = false;

  @Output() editEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();
  @Output() viewDetailEvent = new EventEmitter();

  @Output() pageEvent = new EventEmitter<PageEvent>();
  @Output() dataSourceEvent = new EventEmitter<MatTableDataSource<unknown>>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource!: MatTableDataSource<unknown>;
  columnNames: IColumn[] = [];
  displayedColumns: string[] = [];
  private _existData = false;

  selection = new SelectionModel<any>(false, []);

  onSelect(selected: any): void {
    this.selection.clear();
    this.selection.toggle(selected);
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dataTable) {
      this._loadData();
    }
  }

  ngAfterViewInit(): void {
    if (this._existData) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.paginator.showFirstLastButtons = true;
      this.paginator._intl.itemsPerPageLabel = "Filas por tabla";
      this.paginator._intl.nextPageLabel = "Siguiente página";
      this.paginator._intl.previousPageLabel = "Página anterior";
      this.paginator._intl.firstPageLabel = "Primera página";
      this.paginator._intl.lastPageLabel = "Última página";
    }
  }

  private _loadData(): void {
    this._existData = this.dataTable !== undefined && this.dataTable.data !== undefined;

    if (this._existData) {
      this.columnNames = this.dataTable.columns;

      if (this.dataSource) {
        this.dataSource.data = this.dataTable.data;
      } else {
        this.dataSource = new MatTableDataSource(this.dataTable.data);
      }

      if (this.displayedColumns.length === 0) {
        this.displayedColumns = this.dataTable.columns.filter((x) => !x.hidden).map((item) => item.title);
        if (this.showActions) {
          this.displayedColumns.push('actions');
        }
      }
      this.dataSourceEvent.emit(this.dataSource);
    }
  }

  clickEdit(element: unknown): void {
    this.editEvent.emit(element);
  }

  clickDelete(element: unknown): void {
    this.deleteEvent.emit(element);
  }

  clickViewDetail(element: unknown): void {
    this.viewDetailEvent.emit(element);
  }

  page(pageEvent: PageEvent): void {
    this.pageEvent.emit(pageEvent);
  }
}
