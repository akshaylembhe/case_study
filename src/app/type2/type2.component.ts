import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type2',
  templateUrl: './type2.component.html',
  styleUrls: ['./type2.component.css']
})
export class Type2Component implements OnInit {
    mysmtwtc:string="assets/images/smartwatch.PNG"
    myphon:string="assets/images/image1.PNG"
    mysamsung:string="assets/images/samsung.PNG"
    myasus:string="assets/images/asus.PNG"
    mydell:string="assets/images/dell.PNG"
    mytv:string="assets/images/tv.PNG"
  

  constructor() { }

  ngOnInit(): void {
  }

}
