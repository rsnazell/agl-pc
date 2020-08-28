import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Owner } from './app.types';

@Injectable({
  providedIn: 'root',
})
export class OwnerService {
  private url = 'http://agl-developer-test.azurewebsites.net/people.json';

  constructor(private http: HttpClient) {}

  /** Fetch pet owner data from API */
  getOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.url);
  }
}
