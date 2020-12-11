import {Component, Input , Output , EventEmitter ,
        OnChanges, SimpleChange , OnInit , DoCheck , OnDestroy} from '@angular/core';
import { Product } from 'src/app/products.model';
import { CartService } from './../../../core/services/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})

export class ProductComponent /*implements OnChanges*/{
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor(
      private carServices: CartService
    ){
      // console.log('constructor 1');
    }

    // ngOnChanges(changes: SimpleChange){

    //   console.log('ngOnChanges 2');
    //   console.log(changes);
    // }

    // lo ejecuta de primero, es bueno para hacer consultas a APIS
    ngOnInit(): void{

      // console.log('ngOnInit 3');
    }

    ngDoCheck(): void{

      // console.log('ngDoCheck 4');
    }

    ngOnDestroy(): void{

      // console.log('ngOnDestroy');
    }

    addCard(): void{

      console.log(this.product.title + ' was added to card');
      // this.productClicked.emit(this.product.id);

      this.carServices.addCard(this.product);

    }
}
