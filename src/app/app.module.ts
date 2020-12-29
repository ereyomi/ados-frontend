import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './shared/card/card.component';
import { StyleComponent } from './style/style.component';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppFormsModule } from './shared/forms/appforms.module';
import { ProductsService } from './core/services/products.service';
import { HeaderComponent } from './shared/header/header.component';
import { BagComponent } from './bag/bag.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    StyleComponent,
    ProductModalComponent,
    HeaderComponent,
    BagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppFormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
