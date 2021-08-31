import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { DataService } from '@igmh/services/data.service';

@Component({
  selector: 'igmh-question-save-data',
  templateUrl: './question-save-data.component.html',
  styleUrls: ['./question-save-data.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class QuestionSaveDataComponent implements OnChanges {
  @Output() saveEvent = new EventEmitter();
  @Output() cancelEvent = new EventEmitter();
  @Output() registerEvent = new EventEmitter();
  @Output() completeEvent = new EventEmitter();

  @Input() disabledButtonRegister = false;

  @Input() showLoader = false;
  showQuestion = false;

  constructor(private _dataService: DataService) { }

  clickRegister(): void {
    this.registerEvent.emit();
    this.showQuestion = true;
    this._dataService.Message().msgConfirm('¿Desea guardar los datos?', () => {
      this.clickSave();
    }, () => { this.clickCancel(); });
  }

  clickCancel(): void {
    this.showQuestion = false;
    this.cancelEvent.emit();
  }

  clickSave(): void {
    this.showLoader = true;
    this.showQuestion = false;
    this.saveEvent.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.showLoader && changes.showLoader.previousValue == true && changes.showLoader.currentValue === false) {
      this.completeEvent.emit();
    }
  }
}
