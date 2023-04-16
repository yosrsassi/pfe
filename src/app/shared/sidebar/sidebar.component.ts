import { Component, OnInit , TemplateRef, ViewEncapsulation } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DownloadsComponent } from '../downloads/downloads.component';
import { StyleComponent } from '../style/style.component';
import { TextEditorComponent } from '../text-editor/text-editor.component';


@Component({
  selector: 'kissa-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class SidebarComponent implements OnInit {



  constructor(private modalService: BsModalService,public bsModalRef: BsModalRef ){ }

  isOpened : Boolean = true


  ngOnInit(): void {
    console.log(this.isOpened)


  }

  openTextEditor() {
    


    if (!this.modalService.getModalsCount() ) {
      // No modal is currently open, so we can open the TextEditorComponent modal
      this.modalService.show(TextEditorComponent , {id:1});
      this.isOpened = false
        console.log(this.isOpened)
    }
    else{

      this.modalService.hide(2)
      this.modalService.hide(3)
      //this.modalService.show(TextEditorComponent , {id:1});
      this.isOpened = false

  }

  if (this.isOpened = false) {
    this.modalService.hide(1)
    this.isOpened = true

  }









  
}

  openStyle () {
    if (!this.modalService.getModalsCount()) {
      // No modal is currently open, so we can open the TextEditorComponent modal
      this.modalService.show(StyleComponent, {id:2});
    }
    else{
      this.modalService.hide(1)
      this.modalService.hide(3)
      this.modalService.show(StyleComponent, {id:2});

  }  }
  openDownloads () {
    if (!this.modalService.getModalsCount()) {

        this.modalService.show(DownloadsComponent, {id:3});


      // No modal is currently open, so we can open the TextEditorComponent modal
    }
    else{
      this.modalService.hide(2)
      this.modalService.hide(1)
      this.modalService.show(DownloadsComponent, {id:3});


  }  }


}
