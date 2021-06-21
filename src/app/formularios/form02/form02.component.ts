import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/shared/classes/user';

@Component({
  selector: 'app-form02',
  templateUrl: './form02.component.html',
  styleUrls: ['./form02.component.scss']
})
export class Form02Component implements OnInit {
  // hide=true;
  placeholders = {
    username : 'type your user name',
    password : 'type your password'
  }
  user:User = new User();

  constructor() { }

  ngOnInit(): void {
  }
  sendData(form:any):void{
    this.user.setUsername(form.controls.username.value);
    this.user.setPassword(form.controls.userpass.value);


  }

}
