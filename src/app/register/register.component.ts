import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message:any
userdetails:{
  'username':'',
  'password':''
}={'username':'',
'password':''
  
}
validated:boolean=false
  constructor(private http:HttpClient) {
    http.get("http://localhost:3000/",{responseType:'json'}).subscribe(observer=>{
      this.message=observer
    })
   }

   token:{'token':""}={'token':''}

   register()
   {

     this.http.post("http://localhost:3000/register",{username:'peter',password:'456'},{responseType:'json'}).subscribe(observer=>{
       this.token=observer as {'token':''}
     })
   }
   login()
   {
    this.http.post("http://localhost:3000/login",this.token ,{responseType:'json'}).subscribe(observer=>{
      console.log(observer)
    if(observer)
    {
      console.log('authenticated')
      this.validated=true
      
    }
   
  })
  
}
   


   generatepst(){
console.log("post recived")
this.http.post("http://localhost:3000/",{'name':'black cofee','price':300},{responseType:'json'}).subscribe(observer=>{
  console.log(observer)
})


   }

   
  

  ngOnInit(): void {
  }

}
