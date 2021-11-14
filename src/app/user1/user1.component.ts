import { Component, OnInit } from '@angular/core';
import { ChatserviceService } from '../chatservice.service';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {

  username="";
  sendmsg:any=[];
  recevidemsg=[];
  img2="";
  img3="assets/subin.jpg"
  displaymsg:any=[];
  displaymsg1:any=[];
  sendms1:any=[];
  leftmsg:boolean=true;
  rightmsg:boolean=false;
  
  constructor(private uservalues:ChatserviceService) { 
    this.username=this.uservalues.user1;
  }

  
  deliver(msg:any){
    
    this.sendmsg.push(msg);
    this.uservalues.senddispymsg(msg);

    this.uservalues.user1sendmsg(msg);
    

  }
  ngOnInit(): void {
    this.leftmsg=!this.leftmsg
    
    
    this.recevidemsg=this.uservalues.user2msgarray;
    this.img2=this.uservalues.img2;
    // this.displaymsg1=this.displaymsg;
    this.displaymsg=this.uservalues.userd1;
    
  }
  
}
