import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export interface MsgModel {
  title:string;
  message:string;
}

@Component({
  selector: 'app-msg-dialog',
  templateUrl: './msg-dialog.component.html',
  styleUrls: ['./msg-dialog.component.scss']
})
export class MsgDialogComponent extends DialogComponent<MsgModel, boolean> implements MsgModel {

  title: string;
  message: string;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }


}
