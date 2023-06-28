import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modelos/User';
import { LoginUserService } from 'src/app/servicio/login-user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User = new User();

  constructor(private loginuserservice: LoginUserService, private _router: Router) { }

  ngOnInit(): void {
  }

  userLogin(){
     console.log(this.user)
    this.loginuserservice.loginUser(this.user).subscribe({
      next: (data: any) => {
        console.log(data);
        alert('Se inicio correctamente');
        this._router.navigate(['app']); 
      },
      error: (err: any) => {
        console.log(err);
        alert('Credenciales incorrectas');
      }
    }); 
  }
}
