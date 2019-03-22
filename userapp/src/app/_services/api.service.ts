import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  rootUrl = '/api/users';
  USER_PATH = '/user';
  LIST_USERS = '/list';

  constructor(private http: HttpClient) {}

  trestaurants: any[];

  getUsers(): Observable<any> {
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    const options = {headers};

    return this.http.get(this.rootUrl + this.LIST_USERS, options).pipe(
        map((response: Response) => response),
        catchError(err => {
          console.log(err);
          return of([]);
        })
    );
  }

  addUser(user: User): Observable<any> {
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    const options = {headers};

    return this.http.post(this.rootUrl + this.USER_PATH, {user}, options).pipe(
        map((response: Response) => response),
        catchError(err => {
          console.log(err);
          return of([]);
        })
    );
  }

  editUser(user: User): Observable<any> {
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    const options = {headers};

    return this.http.put(this.rootUrl + this.USER_PATH + '/' + user.id, {user}, options).pipe(
        map((response: Response) => response),
        catchError(err => {
          console.log(err);
          return of([]);
        })
    );
  }

  removeUser(user: User): Observable<any> {
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    const options = {headers};

    return this.http.delete(this.rootUrl + this.USER_PATH + '/' + user.id, options).pipe(
        map((response: Response) => response),
        catchError(err => {
          console.log(err);
          return of([]);
        })
    );
  }
}
