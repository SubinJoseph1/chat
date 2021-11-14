import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {

  constructor() { }

  user1="Subin";
  user2="Jacob";
  user1msgarray:any=[];
  user2msgarray:any=[];
  userdelivermsg:any=[];
  img1="assets/subin.jpg";
  img2="assets/user2bg.png";
  img3="assets/user3.jpg";
  img4="assets/ajith.jpeg";
  img5="assets/user5.jpg";
userd1:any=[];
userd2:any=[];


g1array:any=[];


gropmsg:any=[];

user1sendmsg(message:any){

  this.user1msgarray.push(message);
  return this.user1msgarray;

}

user2sendmsg(messag2:any){
  this.user2msgarray.push(messag2);
  return this.user2msgarray
}

userdelivermsgg(selivermsg:any){
  this.userdelivermsg.push(selivermsg);
  return this.userdelivermsg;

}


groupfunction(gmsg:any){
  this.gropmsg.push(gmsg);
  console.log();
  return this.gropmsg;
  

}


senddispymsg(msg:any){

  this.userd1.push(msg);
  return this.user1;

}

send2displaymsg(msg2:any){

  this.userd2.push(msg2)
  return this.userd2
}


g1(user3msg:any){

    this.g1array.push(user3msg);
    


}

}
