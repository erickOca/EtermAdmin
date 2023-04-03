import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'app/models/login';
import { User } from 'app/models/user';
import { UserService } from 'app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

login: Login = new Login();

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
 
  }
  
  loguear(login: Login) {
    console.log("Usuario correcto:" + this.login)
    this.userService.login(this.login)
    .subscribe( data => {
      alert("Iniciaste sesion correctamente")
      this.router.navigate(['dashboard'])
    }, error => {alert("Usuario o contraseña incorrectos")
    console.log("Usuario incorrecto" + this.login)
  });
}
}


