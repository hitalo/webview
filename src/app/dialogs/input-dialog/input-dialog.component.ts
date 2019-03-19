import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { FormGroup, FormControl } from '@angular/forms';

export interface ConfirmModel {
  title:string;
  message:string;
}

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.scss']
})
export class InputDialogComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;

  formData: FormGroup = new FormGroup({dataInput: new FormControl('')});

  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  
  confirm() {
    this.result = this.dataInput;
    this.close();
  }

  get dataInput() { return this.formData.get('dataInput').value; }
}
