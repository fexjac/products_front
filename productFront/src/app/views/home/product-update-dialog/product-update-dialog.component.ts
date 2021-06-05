import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';
import { Product } from 'src/app/shared/model/product.model';
import { ProductService } from 'src/app/shared/service/product.service';


@Component({
  selector: 'app-product-update-dialog',
  templateUrl: './product-update-dialog.component.html',
  styleUrls: ['./product-update-dialog.component.css']
})
export class ProductUpdateDialogComponent implements OnInit {
  public productForm!: FormGroup;
  public product!: Product;
  public productService: any;

  constructor(
    public dialogRef: MatDialogRef<ProductUpdateDialogComponent>,
    private fb: FormBuilder,
    private rest: ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct()
    this.productForm = this.fb.group({
      id: ['', [Validators.required]],
      productName: ['', [Validators.required]],
      productDescription: ['', [Validators.required]],
      productPrice: ['', [Validators.required]]
    });

  }
  getProduct(){
    this.productService.getProduct().subscribe((data: Product) => {
      this.product = data;
      console.log(this.product)
    });
  }

  cancel(): void {
    this.dialogRef.close(true);
    this.productForm.reset();
  }

  updateProduct(){
    this.rest.postProducts(this.productForm.value).subscribe(result => {});
    this.dialogRef.close(true);
    this.productForm.reset();
  }



}
