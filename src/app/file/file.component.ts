import { Component, OnInit, Input } from '@angular/core';
import FileSaver from 'file-saver';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

  @Input() content: any;

  constructor() { }

  ngOnInit() {
  }

  saveFile() {
    var blob = new Blob([JSON.stringify(this.content)], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "content.txt");
  }

}
