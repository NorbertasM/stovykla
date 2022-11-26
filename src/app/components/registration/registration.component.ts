import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { RegistrationService } from 'src/app/services/registration.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  constructor(
    private registrationService: RegistrationService,
    private router: Router
    ) {

  }

  ngOnInit(): void {
  }

  public onAddNewRegistration(f: NgForm) {
    this.registrationService.addRegistration(f.value)
    .subscribe(() => this.router.navigate(['/']))
  }
}
