import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router , ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { MyValidators } from 'src/app/utils/myValidators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;
  
  constructor(
    private formBuilder: FormBuilder ,
    private productServices: ProductsService ,
    private router: Router,
    private activateRoute: ActivatedRoute,
    ) {

    this.buildForm();
  }

  ngOnInit(): void {
    
    this.activateRoute.params.subscribe((param: Params)=>{

      this.id = param.id;
      this.productServices.getProductById(this.id)
      .subscribe((product) =>{

        this.form.patchValue(product);
      });
    });
  }

  private buildForm(){

    this.form = this.formBuilder.group({

        // estado inicial , lista de validaciones
      title: ['' , [Validators.required]],
      price: [ 0 , [Validators.required, MyValidators.isPriceValid]],
      image: ['' , ],
      description: ['' , [Validators.required]],
    });
  }

  saveProduct(even: Event){

    even.preventDefault();

    if (this.form.valid){

      this.productServices.updateProduct(this.id , this.form.value)
      .subscribe(newProduct => this.router.navigate(['admin/products']) );
    }
  }

}
