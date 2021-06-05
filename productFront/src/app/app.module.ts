import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

import { ProductsListComponent } from './views/home/products-list/products-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductFormDialogComponent } from './views/home/product-form-dialog/product-form-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductUpdateDialogComponent } from './views/home/product-update-dialog/product-update-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsListComponent,
    ProductFormDialogComponent,
    ProductUpdateDialogComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
