import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit {
  public isbutter=false;
  public isfun=false;


  constructor(public bsModalRef1: BsModalRef) {}

  ngOnInit(): void {
  }

  hideModalStyle () {
    this.bsModalRef1.hide();
  }
  OnClickbutter(){
    this.isfun=false;
    this.isbutter=true;
  }
  OnClickfun(){
    this.isfun=true;
    this.isbutter=false;

  }

}
