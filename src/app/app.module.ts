import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgxMaskModule} from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardsComponent } from './cards/cards.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CorouselComponent } from './corousel/corousel.component';
import { SampletabComponent } from './sampletab/sampletab.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { SampleformComponent } from './sampleform/sampleform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BlobImageComponent } from './blob-image/blob-image.component';
import { InputDialogComponent } from './dialogs/input-dialog/input-dialog.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { MsgDialogComponent } from './dialogs/msg-dialog/msg-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CardsComponent,
    NavbarComponent,
    CorouselComponent,
    SampletabComponent,
    LoginComponent,
    FooterComponent,
    SampleformComponent,
    BlobImageComponent,
    InputDialogComponent,
    MsgDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    HttpModule,
    BootstrapModalModule.forRoot({container:document.body}),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  entryComponents: [
    InputDialogComponent,
    MsgDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
