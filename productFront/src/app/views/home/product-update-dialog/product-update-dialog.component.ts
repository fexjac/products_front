import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/model/product.model';
import { ProductService } from 'src/app/shared/service/product.service';


@Component({
  selector: 'app-product-update-dialog',
  templateUrl: './product-update-dialog.component.html',
  styleUrls: ['./product-update-dialog.component.css']
})
export class ProductUpdateDialogComponent implements OnInit {
  [x: string]: any;
  public productForm!: FormGroup;
  public product!: Product;
  public productService: any;

  constructor(private ProductService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
      this.getProduct(this.activatedRoute.snapshot.params.id);
   }

  ngOnInit(): void {

  }

  getProduct(id: any){
    this.productService.getProduct(id)
    .subscribe((data: Product) => {
      this.product = data;
      console.log(this.product)
    });
  }

  updateProduct(product: any) {
    this.ProductService.updateProduct(product)
      .subscribe(
        () => { this.router.navigateByUrl('/');});
  }


  cancel(): void {
    this.dialogRef.close(true);
    this.productForm.reset();
  }

}
