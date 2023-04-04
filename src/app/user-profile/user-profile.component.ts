import { Component, OnInit } from "@angular/core";
import { User } from "app/models/user";
import { UserService } from "app/services/user.service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"],
})
export class UserProfileComponent implements OnInit {
  listUser: User[] = [];
  status = ["ACTIVO"];
  user: User = new User();
  tipos = ["ADMIN", "ENCUESTADOR"];
  isDivVisible = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.userService.showAllUser().subscribe((data) => {
      this.listUser = data;
    });
  }

  save(user: User) {
    if (
      !user.usuario_nombre ||
      !user.usuario_pwd ||
      !user.cve_status ||
      !user.tipo_usuario
    ) {
      this.snackBar.open(
        "Por favor, complete los campos requeridos",
        "Cerrar",
        { duration: 3000,
          panelClass: ['red-snackbar'] }
      );
      return;
    }
    this.userService.saveUser(user).subscribe((data) => {
      this.snackBar.open("Se ha creado un nuevo usuario", "Cerrar", {
        duration: 3000,
        panelClass: ['blue-snackbar'],
      });
      this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
        this.router.navigate(["/user-profile"]);
      });
    });
    console.log(user);
  }

  deleteUserById(usuarioId: number) {
    console.log("usuario " + this.deleteUserById);
    this.userService.deleteUser(usuarioId).subscribe((data) => {
      this.showListUser();
      this.snackBar.open("Se ha borrado el usuario", "Cerrar", {
        duration: 3000,
        panelClass: "blue-snackbar",
      });
    });
  }

  showListUser() {
    this.userService.showAllUser().subscribe((data) => {
      this.listUser = data;
    });
  }
}
