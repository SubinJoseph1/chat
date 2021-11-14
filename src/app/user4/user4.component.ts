import { Component, OnInit } from '@angular/core';
import { ChatserviceService } from '../chatservice.service';

@Component({
  selector: 'app-user4',
  templateUrl: './user4.component.html',
  styleUrls: ['./user4.component.css']
})
export class User4Component implements OnInit {

  constructor(private grop:ChatserviceService) { }
group:any=[];
grop1:any=[];


  
  gropdelivery(user3message:any){
    this.group=this.grop.groupfunction(user3message);

  }
  ngOnInit(): void {
    this.group=this.grop.gropmsg;

    // this.grop1=this.grop.g1array;
    // this.grop.img3

  }
}
