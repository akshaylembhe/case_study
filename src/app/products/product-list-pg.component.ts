import { Component } from "@angular/core";
import { productlist } from "./prodlist";
import { products } from "./products";
@Component({
    selector: 'app-productlist-pg',
    template: `
      <section>
        <h2>Automatic Calculation</h2>
  
        <app-productlist-pg [product]="products" (remove)="onRemove($event)"></app-productlist-pg>
      </section>
    `
})

export class HeroListAutoCalcPageComponent {
    products = productlist.slice();
  
    onRemove(id: number) {
      this.products= this.products.filter(productlist => productlist.id !== id);
    }
  }
  