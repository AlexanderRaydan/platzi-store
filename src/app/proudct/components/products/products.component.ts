import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsServices: ProductsService) { }

  ngOnInit(): void {

    // petición a la API
    this.fetchProducts();
  }

  // tslint:disable-next-line: typedef
  clikedProduct(id: number){

    console.log('product ' + id);
  }

  // tslint:disable-next-line: typedef
  fetchProducts(){

    this.productsServices.getAllProducts()
    .subscribe(products => {

     // console.log(products);

      this.products = products;
    });
  }
}
