import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUser } from 'src/app/models/authUser';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public isLoginMode = false
  public error = ''

  private afterSuccessLogin = (res: User) => {
    this.error = ''
    this.router.navigate(['/'])
  }
  private afterError = (res: any) => {
    switch (res.error.error.message) {
      case 'INVALID_PASSWORD':
        this.error = 'Įvestas netinkamas slaptažodis'
        break;
      case 'EMAIL_EXISTS':
        this.error = 'Vartotojas tokiu paštu jau registruotas'
        break;
      case 'EMAIL_NOT_FOUND':
        this.error = 'El. paštas nerastas'
        break;
      case 'WEAK_PASSWORD : Password should be at least 6 characters':
        this.error = 'Per silpnas slaptažodis'
        break;
        
        default:
        this.error = 'Įvyko nežinoma klaida'
        break;
    }
  }

  constructor(
    private auth: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }


  public onSubmit(f: NgForm) {
    const user = new AuthUser(f.value.email, f.value.password)
    if (this.isLoginMode) {
      this.auth.login(user).subscribe({
        next: this.afterSuccessLogin,
        error: this.afterError,
      })
    } else {
      this.auth.regUser(user).subscribe({
        next: this.afterSuccessLogin,
        error: this.afterError,
      })
    }
  }

}
