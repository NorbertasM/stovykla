import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Registration } from '../models/registration';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private readonly url = 'https://stovykla-14ba6-default-rtdb.europe-west1.firebasedatabase.app/'

  constructor(private http: HttpClient) { }

  public addRegistration(registration: Registration) {
    return this.http.post(`${this.url}registrations.json`, registration)
  }

  public getRegistrations() {
    return this.http.get<Record<string, Registration>>(`${this.url}registrations.json`).pipe(
      map((res): Registration[] => {
        if (res) {
          return Object.entries(res).map(([key, value]) => ({ ...value, id: key }))
        } else {
          return []
        }
      }
    ))
  }

  public getRegistration(id: string) {
    return this.http.get<Registration>(`${this.url}registrations/${id}.json`).pipe(
      map(res => ({ ...res, id }))
    )
  }

  public updateRegistration(id: string, registration: Registration) {
    return this.http.patch(`${this.url}registrations/${id}.json`, registration)
  }

  public deleteRegistration(id: string) {
    return this.http.delete(`${this.url}registrations/${id}.json`)
  }
}
