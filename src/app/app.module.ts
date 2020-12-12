import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './shared/card/card.component';
import { StyleComponent } from './style/style.component';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { FormsModule } from './shared/forms/forms.module';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    StyleComponent,
    ProductModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
