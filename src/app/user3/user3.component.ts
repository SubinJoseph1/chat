import { Component, OnInit } from '@angular/core';
import { ChatserviceService } from '../chatservice.service';

@Component({
  selector: 'app-user3',
  templateUrl: './user3.component.html',
  styleUrls: ['./user3.component.css']
})
export class User3Component implements OnInit {

  constructor(private grop:ChatserviceService) { }
group:any=[]
img3="";

  gropdelivery(user3message:any){
    this.group=this.grop.groupfunction(user3message);
    this.grop.g1(user3message);
    

  }
  ngOnInit(): void {
    this.group=this.grop.gropmsg;
    this.img3=this.grop.img3;
  }
}
