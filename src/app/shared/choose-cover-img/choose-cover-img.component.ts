import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'kissa-choose-cover-img',
  templateUrl: './choose-cover-img.component.html',
  styleUrls: ['./choose-cover-img.component.scss'

]
})
export class ChooseCoverImgComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }


  ngOnInit(): void {
  }
  
  hideModal_choose_cover_img() {
    this.bsModalRef.hide();
    console.log("hide");
  }

  
}
