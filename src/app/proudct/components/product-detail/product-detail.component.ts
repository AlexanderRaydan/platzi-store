import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/products.model';
import { ProductComponent } from '../product/product.component';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  productComponent: ProductComponent;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit(){

    this.route.params.subscribe((params: Params) => {

      const id = params.id;
      // console.log('el id es: ' + id);
      this.fetchProductById(id);
    });
  }

  fetchProductById(id: string){

    this.productService.getProductById(id)
    .subscribe(product => this.product = product );
  }

  createProduct(){

    const newProduct: Product = {
      id: '100',
      title: 'nuevo bonito y barato',
      image: './assets/images/edteam.png',
      price: 40,
      description: '40 pesitos, re bataro wacho',
    };

    this.productService.createProduct(newProduct)
    .subscribe(product => console.log(product) );
  }

  updateProduct(){

    const newProduct: Partial<Product> = {
      title: 'no me baneen plis',
      image: 'https://ed.team/static/images/utils/og-image.jpg',
      description: 'descripción interesante',
    };

    this.productService.updateProduct( '100' , newProduct)
    .subscribe(product => console.log(product) );
  }

  deleteProduct(){

    this.productService.deleteProduct('100')
    .subscribe(product => console.log(product));
  }
}
