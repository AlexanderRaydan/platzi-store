import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';
  saludo = 'manaos';

  items = ['paula' , 'alex' , 'sosita'];

  power = 10;
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  addItem(){

    this.items.push('nuevo item');
  }
  // tslint:disable-next-line: typedef
  deleteItem(){

    this.items.pop();
  }

  // tslint:disable-next-line: typedef
  deleteByIndex(index: number){

    this.items.splice(index , 1);
  }
}
