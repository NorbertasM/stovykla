import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BirthYearDirective } from './directives/birth-year.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    BirthYearDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
