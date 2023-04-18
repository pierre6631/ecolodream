import { Injectable } from '@angular/core';
import { IUser } from './iuser';
import { BehaviorSubject, catchError, map, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl = "http://localhost:8383/api";
  user: IUser = [];
  public user$: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(this.user);
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  constructor(private http: HttpClient) {
    this.user$ = new BehaviorSubject<IUser>(this.user);
  }

  
  login(){
    return this.http.post<IUser>(this.usersUrl + "/auth/login", {}).pipe(
      tap((user:IUser) =>{
        this.user$ = new BehaviorSubject<IUser>(user);
      }),
    );
  }

  getUsers() {
    return this.http.get<IUser>(this.usersUrl);
  }

  deleteUser(userId: number) {
  }

  updateUser(userId: number) {
  }

  addUser(lastname: string, firstname:string, email:string, password:string) {
    return this.http.post<IUser>(this.usersUrl + "/users", {
      lastname, firstname, email, password
    }).pipe(
      catchError(this.handleError)
    );
  }
  
}
