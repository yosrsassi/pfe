import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ChooseCoverImgComponent } from '../choose-cover-img/choose-cover-img.component';

@Component({
  selector: 'kissa-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class CoverComponent implements OnInit {
  title : String = "The Making of a Manger";

  constructor(private modalService: BsModalService,public bsModalRef1: BsModalRef) { }

  ngOnInit(): void {
  }
  open_choose_cover_img(){
    this.modalService.show(ChooseCoverImgComponent);

  }

}
