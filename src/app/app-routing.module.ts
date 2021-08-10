import { NgModule } from '@angular/core';
import { RouterLinkActive, RouterModule, Routes } from '@angular/router';
import { PaymentmethodsComponent } from './paymentmethods/paymentmethods.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { Type1Component } from './type1/type1.component';
import { Type2Component } from './type2/type2.component';
import { Type3Component } from './type3/type3.component';

const routes: Routes = [
{
  path:"products" ,component:ProductsComponent 
},
{
  path:"register" , component:RegisterComponent
},
{
  path:"paymentmethods",component:PaymentmethodsComponent
},
{
  path:"type1" ,component:Type1Component
},{
  path:"type2" ,component:Type2Component 
},{
  path:"type3" ,component:Type3Component 
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
