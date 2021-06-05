import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductUpdateDialogComponent } from './views/home/product-update-dialog/product-update-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'api/product/:id', component: ProductUpdateDialogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
