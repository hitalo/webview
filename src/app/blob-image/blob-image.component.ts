import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Http, ResponseContentType } from '@angular/http';
import { CustomDialogService } from '../services/dialog-service.service';

@Component({
  selector: 'app-blob-image',
  templateUrl: './blob-image.component.html',
  styleUrls: ['./blob-image.component.scss']
})
export class BlobImageComponent implements OnInit {

  imageData: any;
  imgURL: string;

  constructor(private http: Http, private sanitizer: DomSanitizer, private dialogService: CustomDialogService) { }

  ngOnInit() {
  }

  openDialog() {

    this.dialogService.showInputDialog('URL', 'Image URL').subscribe(imgURL => {
      //imgURL = 'https://github.githubassets.com/images/modules/open_graph/github-mark.png';
      if(imgURL !== undefined && imgURL !== '') {
        this.imgURL = imgURL;
        this.showImage(imgURL);
      }
    });
  }

  showImage(imgURL) {

    this.http.get(imgURL, {
      responseType: ResponseContentType.Blob
    }).toPromise().then((res: any) => {

        let blob = new Blob([res._body], {
          type: res.headers.get("Content-Type")
        });
        let urlCreator = window.URL;
        this.imageData = this.sanitizer.bypassSecurityTrustUrl(
          urlCreator.createObjectURL(blob)
        ); 
         
    }).catch(err => {
      this.dialogService.showMsgDialog('ERROR', 'Can not display URL');
    });
  }

}
