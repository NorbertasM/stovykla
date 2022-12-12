import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public isLoggedIn = false

  public afterUserUpdated = () => {
    this.isLoggedIn = this.auth.isLoggedIn()
  }

  constructor(
    private auth: AuthService,
    private router: Router,
    ) {
    this.afterUserUpdated()
    this.auth.userUpdated.subscribe(this.afterUserUpdated)
  }

  ngOnInit(): void {
  }

  public logout() {
    this.auth.logout()
  }

  public newPassowrd() {
    this.router.navigate(['/changepassword'])
  }
}
