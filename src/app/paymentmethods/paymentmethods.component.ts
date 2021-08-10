import { Component, OnInit } from '@angular/core';
import { PaymentservicesService } from '../paymentservices.service';
import { payoptions } from './paylist';
import { paymentmethod } from './payment';
@Component({
  selector: 'app-paymentmethods',
  templateUrl: './paymentmethods.component.html',
  styleUrls: ['./paymentmethods.component.css']
})
export class PaymentmethodsComponent implements OnInit {
service:paymentmethod[]
isunchanged:boolean=true
service_select=''
onselect(value:string){
  this.service_select=value
}
changeselect(){
  this.isunchanged=true
  
}

constructor(paymentserv: PaymentservicesService) {

this.service=paymentserv.getservicelist()
}
  ngOnInit(): void {
  }

}
