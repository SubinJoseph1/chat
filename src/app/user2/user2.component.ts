import { Component, OnInit } from '@angular/core';
import { ChatserviceService } from '../chatservice.service';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {
username2="";
receivedmsg=[];
sendmsg:any=[];
img="";
img3="assets/user2bg.png"
senddisplay:any=[];
  constructor(private user2name:ChatserviceService) { 
    this.username2=this.user2name.user2
  }

  
deliver(user2send:any){

  //   this.sendmsg=this.user2name.userdelivermsg;
  // this.user2name.userdelivermsgg(user2send);

  this.user2name.user2sendmsg(user2send);

  this.user2name.send2displaymsg(user2send);

  
  

}
ngOnInit(): void {

 this.receivedmsg= this.user2name.user1msgarray;
 this.img=this.user2name.img1;

this.senddisplay=this.user2name.userd2


}
}
