import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RegistrationEditComponent } from './components/registration-edit/registration-edit.component';
import { BirthYearDirective } from './directives/birth-year.directive';
import { RegistrationListComponent } from './components/registration-list/registration-list.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthComponent } from './components/auth/auth.component';


const routes: Routes = [
  {
    path: '', 
    component: RegistrationListComponent,
  },
  {
    path: 'edit/:id', 
    component: RegistrationEditComponent,
  },
  {
    path: 'new', 
    component: RegistrationComponent,
  },
  {
    path: 'auth', 
    component: AuthComponent,
  }
]


@NgModule({
  declarations: [
    AppComponent,
    RegistrationEditComponent,
    BirthYearDirective,
    NavigationComponent,
    RegistrationListComponent,
    RegistrationComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
