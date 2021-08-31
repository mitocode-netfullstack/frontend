import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CollectionCategory } from '@igmh/services/apis/category/category-api-models.interface';
import { DataService } from '@igmh/services/data.service';
import { ProductFlowService } from '../../service/product-flow.service';

@Component({
  selector: 'igmh-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductFlowService, FormBuilder]
})
export class ProductComponent implements OnInit {

  @Input() idProduct!: number;

  constructor(
    public _productFlowService: ProductFlowService,
    private _dataService: DataService
  ) {
    _productFlowService.loadFormGroup();
  }

  listCategories: CollectionCategory[] = [];

  ngOnInit(): void {
    this._loadCategories();
    this._loadDataEdit();
  }

  private _loadCategories(): void {
    this._dataService.Category().findAll().subscribe((data) => {
      this.listCategories = data.collection;
    });
  }

  private _loadDataEdit(): void {
    if (this.idProduct) {
      this._productFlowService.loadDataFormGroup(this.idProduct);
    }
  }

  registerProduct(): void {
    this._productFlowService.registerProduct(this.idProduct);
  }
}
