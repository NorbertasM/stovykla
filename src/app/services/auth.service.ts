import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthUser } from '../models/authUser';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public readonly key = 'AIzaSyD7BuuGOEFegW-m0UUtn1xob7xj0T2zwpI'
  private readonly url = 'https://identitytoolkit.googleapis.com/v1/accounts'
  public user: User | null = null
  public userUpdated = new EventEmitter()

  constructor(
    private http: HttpClient,
    private router: Router
    ) {
    }

  public onLoginSuccess = (res: User) => {
    this.user = res
    this.userUpdated.emit()
    localStorage.setItem('user', JSON.stringify(res))
  }

  public autoLogin() {
    const user = localStorage.getItem('user')
    if (user) {
      this.onLoginSuccess(JSON.parse(user))
    }
  }

  public regUser(userInfo: AuthUser) {
    return this.http.post<User>(`${this.url}:signUp?key=${this.key}`, userInfo).pipe(
      tap(this.onLoginSuccess)
    )
  }

  public login(userInfo: AuthUser) {
    return this.http.post<User>(`${this.url}:signInWithPassword?key=${this.key}`, userInfo).pipe(
      tap(this.onLoginSuccess)
    )
  }

  public logout() {
    this.user = null
    this.userUpdated.emit()
    this.router.navigate(['/auth'])
  }

  public isLoggedIn() {
    return !!this.user
  }
}
