import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{


          num1 :number=0;
          num2 :number=0;
          
          total:number=0;


            add(){

              this.total=this.num1+this.num2;
            }
            sub(){

              this.total=this.num1-this.num2;
            }div(){

              this.total=this.num1/this.num2;
            }mul(){

              this.total=this.num1*this.num2;
            }




























      // num1=0;
      // num2=0;
      // ans=0;

      // day=6;

      // total(){

      //   this.ans=this.num1+this.num2;


      // }

      // sub(){

      //   this.ans=this.num1-this.num2;

      // }
      
      // mul(){

      //   this.ans=this.num1*this.num2;

      // }
      // div(){

      //   this.ans=this.num1/this.num2;

      // }
      
/*
          username="";
          password="";
        
         text="";
num1: any;
        
         validate(username:string,password:string){

            if(this.username=='admin' && this.password=='admin'){

                      console.log("Success");
                      this.text="Success";
                
                      
            }
            else{

              
              console.log("Failed");
              this.text="Failed";
            }

       }
*/





}
