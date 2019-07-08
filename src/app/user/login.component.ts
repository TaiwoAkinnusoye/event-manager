import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  templateUrl: "./login.component.html",
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
    `
  ]
})
export class LoginComponent {
  userName;
  password;
  mouseOverLogin;
  loginInvalid = false;
  constructor(private auth: AuthService, private router: Router) {}

  login(formValues) {
    this.auth
      .loginUser(formValues.userName, formValues.password)
      .subscribe(res => {
        if (!res) {
          this.loginInvalid = true;
        } else {
          this.router.navigate(["events"]);
        }
      });
  }

  cancel() {
    this.router.navigate(["events"]);
  }
}
