import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent implements OnInit {

  constructor(public bsModalRef1: BsModalRef) {}

  ngOnInit(): void {
  }
  hideModalDownloads () {
    this.bsModalRef1.hide();
  }

}
