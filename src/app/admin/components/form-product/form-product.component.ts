import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { MyValidators } from 'src/app/utils/myValidators';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder ,
    private productServices: ProductsService ,
    private router: Router,
    private storage: AngularFireStorage,
    ) {

    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(){

    this.form = this.formBuilder.group({

        // estado inicial , lista de validaciones
      id: ['' , [Validators.required]],
      title: ['' , [Validators.required]],
      price: [ 0 , [Validators.required, MyValidators.isPriceValid]],
      image: ['' , ],
      description: ['' , [Validators.required]],
    });
  }

  saveProduct(event: Event){

    event.preventDefault();

    if (this.form.valid){

      this.productServices.createProduct(this.form.value)
      .subscribe(newProduct => this.router.navigate(['admin/products']) );
    }
  }

  uploadFile(event){

    const file = event.target.files[0];
    const name = file.name;
    const fileResf = this.storage.ref(name);
    const task = this.storage.upload(name , file);

    task.snapshotChanges()
    .pipe(
      finalize(() => {

        this.image$ = fileResf.getDownloadURL();
        this.image$.subscribe (url => {
          this.form.get('image').setValue(url);
        })
      }))
      .subscribe();
  }
}
