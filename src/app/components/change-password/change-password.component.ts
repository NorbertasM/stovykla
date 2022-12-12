import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  public changeSuccess = false
  public error = ''

  private afterError = (res: any) => {
    switch (res.error.error.message) {
      case 'INVALID_ID_TOKEN':
        this.error = 'Dabartinė autorizacija negalioja, turite prisijungti iš naujo'
        break;
      case 'WEAK_PASSWORD : Password should be at least 6 characters':
        this.error = 'Per silpnas slaptažodis'
        break;
      case 'TOKEN_EXPIRED':
        this.error = 'Dabartinė autorizacija negalioja, turite prisijungti iš naujo'
        break;
        
        default:
        this.error = 'Įvyko nežinoma klaida'
        break;
    }
  }

  constructor(
    private auth: AuthService,
    ) { }

  ngOnInit(): void {
  }


  public onSubmit(f: NgForm) {
    this.changeSuccess = false
    if (f.value.password !== f.value.passwordRepeat) {
      this.error = 'Slaptažodžiai nesutampa'
    } else {
      this.error = ''
      this.auth.changePassword(f.value.password)?.subscribe({
          next: (res) =>  {
            this.changeSuccess = true
            f.resetForm()
          },
          error: this.afterError,
        })
    }
  }
}
