import { Component,Input,Output,EventEmitter ,OnInit } from '@angular/core';
import { trigger,state,style,animate,transition } from '@angular/animations';
import { products } from './products';
import { productlist } from './prodlist';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    trigger('shrinkOut', [
      state('in', style({ height: '*' })),
      transition('* => void', [
        style({ height: '*' }),
        animate(250, style({ height: 0 }))
      ])
    ])
  ]

})
export class ProductsComponent implements OnInit {

   product={}
  prodlist=[
    {
        prodname:"Smart Watch",
        id:1
    },
    {
        prodname:"OPPO F10 Pro",
        id:2
    },
    {
        prodname:"Samsung Galaxy Tab",
        id:3
    },
    {
        prodname:"Asus Laptop",
        id:4
    },
    {
        prodname:"Dell Laptop",
        id:5
    },
    {
        prodname:"Smart TV",
        id:6
    }
    
    
    ]
  isunchanged=true;
  class= "special"
  cartlist:any=[];
  addprodtocart (product:any){
    this.cartlist.push(product)
    return;
  }
 
 @Input() prod:products[]=productlist;

  @Output() remove = new EventEmitter<number>();
  removeprod(id:number){
    this.remove.emit(id)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
