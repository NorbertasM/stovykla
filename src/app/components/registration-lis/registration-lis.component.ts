import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/app/models/registration';
import { RegistrationService } from 'src/app/services/registration.service';


@Component({
  selector: 'app-registration-lis',
  templateUrl: './registration-lis.component.html',
  styleUrls: ['./registration-lis.component.css']
})
export class RegistrationLisComponent implements OnInit {
  public registrations: Registration[] = []

  constructor(private registrationService: RegistrationService) {
    this.loadData()
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
