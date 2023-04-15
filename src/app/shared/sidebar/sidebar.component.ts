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

  ngOnInit(): void {

  }


  openTextEditor() {
    if (!this.modalService.getModalsCount()) {
      // No modal is currently open, so we can open the TextEditorComponent modal
      this.modalService.show(TextEditorComponent);
    }
    else{
      this.modalService.hide();
  }
}

  openStyle () {
    if (!this.modalService.getModalsCount()) {
      // No modal is currently open, so we can open the TextEditorComponent modal
      this.modalService.show(StyleComponent);
    }
    else{
      this.modalService.hide();
  }  }
  openDownloads () {
    if (!this.modalService.getModalsCount()) {
      // No modal is currently open, so we can open the TextEditorComponent modal
      this.modalService.show(DownloadsComponent);
    }
    else{
      this.modalService.hide();
  }  }


}
