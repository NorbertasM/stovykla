import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/app/models/registration';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { RegistrationService } from 'src/app/services/registration.service';


@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {
  public registrations: Registration[] = []
  public isLoggedIn = false
  public user: User | null = null

  constructor(
    private registrationService: RegistrationService,
    private authService: AuthService
    ) {
    this.loadData()
    this.isLoggedIn = this.authService.isLoggedIn()
    this.user = this.authService.user
   }

  ngOnInit(): void {
  }

  private loadData() {
    this.registrationService.getRegistrations().subscribe(res => {
      console.log(res)
      this.registrations = res ? res : []
    }
    )
  }

  public onDeleteClick(id: string | null) {
    if (id) {
      this.registrationService.deleteRegistration(id).subscribe(() => this.loadData())
    }
  }
}
