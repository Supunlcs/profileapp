import { Component, OnInit } from '@angular/core';

export interface Friend{

  id: string;
  name: string;
  mobile: string;
  address: string;
}

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {
  friends: Friend[]= [
    {id : "001", name : "Supun", mobile : "supun@gmail.com", address : "123"}, 
    {id : "002", name : "Supun", mobile : "supun@gmail.com", address : "123"}];
  

  constructor() { }

  ngOnInit(): void {
  }

}
