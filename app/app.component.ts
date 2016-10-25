import { Component,Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `app/app.template.html`,
})


export class AppComponent { 

  @Input() agent:string;
  @Input() security:string;

  message: string ; //Updates the message string
  VALID_MESSAGE :string   = 'Valid security Code';
  INVALID_MESSAGE :string = 'Invalid security Code';

  //Input two parameters and returns message 

  private validateCode(): Boolean {
  
  console.log("Click Event Triggered",this.agent,this.security,"---");

  this.message='No Value';
          if(this.agent!=''||this.security!=''){
          console.log(this.agent == this.security,this.agent,this.security);
          this.message = ((this.agent == this.security)? this.VALID_MESSAGE:this.INVALID_MESSAGE);
          return (this.agent == this.security);
          }
          return false;
        }
            
    }

    
    
