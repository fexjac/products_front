import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';
import { ProductService } from 'src/app/shared/service/product.service';


@Component({
  selector: 'app-product-form-dialog',
  templateUrl: './product-form-dialog.component.html',
  styleUrls: ['./product-form-dialog.component.css']
})
export class ProductFormDialogComponent implements OnInit {
  public productForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ProductFormDialogComponent>,
    private fb: FormBuilder,
    private rest: ProductService
  ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: ['', [Validators.required]],
      productName: ['', [Validators.required]],
      productDescription: ['', [Validators.required]],
      productPrice: ['', [Validators.required]]
    });
  }

  cancel(): void {
    this.dialogRef.close(true);
    this.productForm.reset();
  }

  createProduct(){
    this.rest.postProducts(this.productForm.value).subscribe(result => {});
    this.dialogRef.close(true);
    this.productForm.reset();
  }

}
