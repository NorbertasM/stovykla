import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

import { ActivatedRoute } from '@angular/router'
import { Registration } from 'src/app/models/registration';
import { RegistrationService } from 'src/app/services/registration.service';


@Component({
  selector: 'app-registration-edit',
  templateUrl: './registration-edit.component.html',
  styleUrls: ['./registration-edit.component.css']
})
export class RegistrationEditComponent implements OnInit {

  public id: string
  public registration: Registration | null = null

  constructor(
    private route: ActivatedRoute,
    private registrationService: RegistrationService,
    private router: Router
  ) {
    this.id = this.route.snapshot.params['id']
    this.registrationService.getRegistration(this.id).subscribe(res =>this.registration = res)
  }

  ngOnInit(): void {
  }

  public onUpdateRegistration(f: NgForm) {
    this.registrationService.updateRegistration(this.id, f.value)
    .subscribe(() => this.router.navigate(['/']))
  }

}
