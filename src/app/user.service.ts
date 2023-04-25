import { Injectable } from '@angular/core';
import { IUser } from './iuser';
import { BehaviorSubject, catchError, map, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl = "http://localhost:8383/api";
  user: IUser | undefined = undefined;
  public user$: BehaviorSubject<IUser | undefined> = new BehaviorSubject<IUser | undefined>(this.user);
  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => error);
  }

  constructor(private http: HttpClient) {
    this.user$ = new BehaviorSubject<IUser | undefined>(this.user);
  }
  
  login(email:string, password:string){
    return this.http.post<IUser>(this.usersUrl + "/auth/login", {
      email, password
    }).pipe(
      catchError(this.handleError),
      tap((user:IUser) =>{
        this.user$ = new BehaviorSubject<IUser | undefined>(user);
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
