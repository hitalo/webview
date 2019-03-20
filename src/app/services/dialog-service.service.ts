import { Injectable } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';
import { InputDialogComponent } from '../dialogs/input-dialog/input-dialog.component';
import { Observable } from 'rxjs';
import { MsgDialogComponent } from '../dialogs/msg-dialog/msg-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class CustomDialogService {

  constructor(private dialogService: DialogService) { }

  showInputDialog(title: string, message: string): Observable<any> {
    return this.dialogService.addDialog(InputDialogComponent, {
      title: title,
      message: message
    });
  }

  showMsgDialog(title: string, message: string): Observable<any> {
    return this.dialogService.addDialog(MsgDialogComponent, {
      title: title,
      message: message
    });
  }
}
