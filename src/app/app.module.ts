import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TextEditorComponent } from './shared/text-editor/text-editor.component';
import { StyleComponent } from './shared/style/style.component';
import { DownloadsComponent } from './shared/downloads/downloads.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoverComponent } from './shared/cover/cover.component';
import { ChooseCoverImgComponent } from './shared/choose-cover-img/choose-cover-img.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    TextEditorComponent,
    StyleComponent,
    DownloadsComponent,
    CoverComponent,
    ChooseCoverImgComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
