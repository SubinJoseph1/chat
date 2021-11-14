import { Component, OnInit } from '@angular/core';
import { ChatserviceService } from '../chatservice.service';

@Component({
  selector: 'app-user5',
  templateUrl: './user5.component.html',
  styleUrls: ['./user5.component.css']
})
export class User5Component implements OnInit {

  constructor(private grop:ChatserviceService) { }


  group:any=[];
  
  gropdelivery(user3message:any){
    this.group=this.grop.groupfunction(user3message);

  }

  ngOnInit(): void {
    this.group=this.grop.gropmsg;
  }
}
