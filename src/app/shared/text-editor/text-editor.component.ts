import { OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {
  alignment: string = 'left';

  constructor(public bsModalRef: BsModalRef) {}
  ngOnInit(): void {
  }
//this method for the button x to close text editor component 
  hideModalTextEditor () {

    this.bsModalRef.hide();
  }
  @ViewChild('kissa') kissa: ElementRef;


//method to change the font of selected text from kissa
  changeFont(event: Event) {
    const target = event.target as HTMLSelectElement;
    const font = target.value;
    const selection = window.getSelection();
  if (!selection) {
    return;
  }

  const range = selection.getRangeAt(0);
  if (!range) {
    return;
  }
  const kissa = this.kissa.nativeElement;
  if (!kissa.contains(range.commonAncestorContainer)) {
    return;
  }
  console.log(kissa);

  const span = document.createElement('span');
  span.style.fontFamily = font;
  span.innerHTML = range.toString();

  // Replace the selected text with the new span element
  range.deleteContents();
  range.insertNode(span);

  }




  //method to change the size of selected text in kissa
  changeSize(event: Event) {
    const target = event.target as HTMLSelectElement;
    const size = target.value;
    const selection = window.getSelection();
  if (!selection) {
    return;
  }

  const range = selection.getRangeAt(0);
  if (!range) {
    return;
  }
  const kissa = this.kissa.nativeElement;
  if (!kissa.contains(range.commonAncestorContainer)) {
    return;
  }
  console.log(kissa);

  const span = document.createElement('span');
  span.style.fontSize = size;
  span.innerHTML = range.toString();
  range.deleteContents();
  range.insertNode(span);

  }



//methods to align text of kissa
  alignLeft() {
    this.alignment = 'left';
  }

  alignRight() {
    this.alignment = 'right';
  }

  alignCenter() {
    this.alignment = 'center';
  }

  alignJustify() {
    this.alignment = 'justify';
  }



  //method to change the color of a selected text in kissa
  changeColor(event: Event) {
    const target = event.target as HTMLSelectElement;
    const color = target.value;
    const selection = window.getSelection();
  if (!selection) {
    return;
  }

  const range = selection.getRangeAt(0);
  if (!range) {
    return;
  }
  const kissa = this.kissa.nativeElement;
  if (!kissa.contains(range.commonAncestorContainer)) {
    return;
  }
  

  const span = document.createElement('span');
  span.style.color = color;
  console.log(color);
  span.innerHTML = range.toString();
  range.deleteContents();
  range.insertNode(span);

  }

  
}






