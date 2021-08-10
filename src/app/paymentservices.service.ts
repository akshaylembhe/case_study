import { Injectable } from '@angular/core';
import { payoptions } from './paymentmethods/paylist';
@Injectable({
  providedIn: 'root'
})
export class PaymentservicesService {

  constructor() { }
  getservicelist(){
    return payoptions;
  }
}
