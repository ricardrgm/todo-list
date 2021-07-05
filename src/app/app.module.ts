import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemComponent } from './components/item/item.component';
import { ErrorComponent } from './components/error/error.component';
import { ListComponent } from './components/display/list/list.component';
import { CardComponent } from './components/display/card/card.component';
import { MessageComponent } from './components/error/message/message.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from "@angular/common/http";
import { DialogComponent } from './components/display/dialog/dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ItemComponent,
    ErrorComponent,
    ListComponent,
    CardComponent,
    MessageComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
