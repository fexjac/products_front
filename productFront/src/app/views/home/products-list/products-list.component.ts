import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/model/product.model';
import{ ProductService } from 'src/app/shared/service/product.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductUpdateDialogComponent } from '../product-update-dialog/product-update-dialog.component';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productsAll!: Product[];

  constructor(
    public productService: ProductService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(data => {
      this.productsAll = data;
      console.log(this.productsAll)
    });
  }

  updateProduct(): void {
    const dialogRef = this.dialog.open(ProductUpdateDialogComponent, {
      minWidth: '400px',
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
