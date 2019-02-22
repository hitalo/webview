import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgxMaskModule} from 'ngx-mask';

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
    SampleformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
