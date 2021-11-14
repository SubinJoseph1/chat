import { Component } from '@angular/core';
import { ChatserviceService } from './chatservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chatapp';
  constructor(private chatuser:ChatserviceService){
    this.uservalue1=this.chatuser.user1;
    this.uservalue2=this.chatuser.user2;


  }
  uservalue1="";
  uservalue2="";
  
  


}
