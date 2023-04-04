import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Login } from "app/models/login";
import { User } from "app/models/user";
import { UserService } from "app/services/user.service";
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  login: Login = new Login();

  constructor(
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  loguear(login: Login) {
    if (!login.userName || !login.userPwd) {
      this.snackBar.open(
        "Por favor, complete los campos requeridos",
        "Cerrar",
        { duration: 3000 }
      );
      return;
    }
    this.userService.login(this.login).subscribe(
      (data) => {
        this.snackBar.open("Has iniciado sesion", "Cerrar", { duration: 3000 });
        this.router.navigate(["dashboard"]);
        return;
      },
      (error) => {
        this.snackBar.open("Usuario o contraseña incorrectos", "Cerrar", {
          duration: 3000,
        });
        this.resetForm();
      }
    );
  }
  resetForm() {
    this.login = {
      userName: "",
      userPwd: "",
    };
  }
}
