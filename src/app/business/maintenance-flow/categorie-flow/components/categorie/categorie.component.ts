import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CategorieFlowService } from '../../service/categorie-flow.service';


@Component({
  selector: 'igmh-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss'],
  providers: [CategorieFlowService, FormBuilder]
})
export class CategorieComponent implements OnInit {

  @Input() idCategorie!: number;

  constructor(public categorieFlowService: CategorieFlowService) {
    categorieFlowService.loadFormGroup();
  }

  ngOnInit(): void {
    this._loadDataEdit();
  }

  private _loadDataEdit(): void {
    if (this.idCategorie) {
      this.categorieFlowService.loadDataFormGroup(this.idCategorie);
    }
  }
}
