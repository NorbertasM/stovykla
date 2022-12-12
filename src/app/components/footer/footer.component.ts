import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public isLoggedIn = false

  public afterUserUpdated = () => {
    this.isLoggedIn = this.auth.isLoggedIn()
  }

  constructor(private auth: AuthService) {
    this.afterUserUpdated()
    this.auth.userUpdated.subscribe(this.afterUserUpdated)
  }


  ngOnInit(): void {
  }
}
