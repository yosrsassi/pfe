import { Component, OnInit } from '@angular/core';
import { BsModalService ,BsModalRef} from 'ngx-bootstrap/modal';
import { TextEditorComponent } from '../text-editor/text-editor.component';

@Component({
  selector: 'kissa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title : String = "The Making of a Manger"
  bsModalRef: any;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }

  

}
