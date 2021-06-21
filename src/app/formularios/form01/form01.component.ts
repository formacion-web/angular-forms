import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form01',
  templateUrl: './form01.component.html',
  styleUrls: ['./form01.component.scss']
})
export class Form01Component implements OnInit {
  binding="hola";
  placeholders = {
    username : 'type your user name',
    password : 'type your password'
  }
  message!:string;
  userName!:string;
  userPassword!:string;
  constructor() { }

  ngOnInit(): void {
  }

  sendData(username:HTMLInputElement,password:HTMLInputElement):void{
    this.message ='';
    this.userName = username.value;
    this.userPassword = password.value;
    if(!(this.userName && this.userPassword))
      this.message = 'Faltan Datos';

  }

}
