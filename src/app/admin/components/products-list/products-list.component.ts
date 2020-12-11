import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/products.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[];
  displayedColumns: string[] = ['id', 'title', 'price' , 'actions'];

  constructor(private productServices: ProductsService ) { }

  ngOnInit(): void {

    this.fetchProduct();
  }

  fetchProduct(){

    this.productServices.getAllProducts()
    .subscribe(products => this.products = products);
  }

  deleteProduct(id: string){

    this.productServices.deleteProduct(id).subscribe(
      res => this.fetchProduct()
    );
  }
}
