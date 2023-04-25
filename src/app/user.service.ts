import { Injectable } from '@angular/core';
import { IUser } from './iuser';
import { BehaviorSubject, catchError, map, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import jwt_decode from 'jwt-decode';

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
    return this.http.post<string>(this.usersUrl + "/auth/login", {
      email, password
    }).pipe(
      catchError(this.handleError),
      tap((ACCESS_TOKEN) =>{
        this.addToken(ACCESS_TOKEN);
        this.getUserConnected();
      }),
    );
  }

  addToken(ACCESS_TOKEN: string){
    localStorage.setItem('ACCESS_TOKEN', ACCESS_TOKEN);
  }
  getToken(){
    return localStorage.getItem('ACCESS_TOKEN');
  }

  getUserConnected(){
    const token = this.getToken();
    if(token){
      const decoded_token = jwt_decode(token);
      /*@ts-ignore*/
      return this.getUser(decoded_token.id).subscribe(
        (user: IUser) => {
          this.user$ = new BehaviorSubject<IUser | undefined>(user)
        }
      );
    }else{
      return null;
    }
  }

  getUser(id: number | undefined){
    return this.http.get<IUser>(this.usersUrl + "/auth/login/" + id).pipe(
      catchError(this.handleError),
    );
  }

  getUsers() {
    return this.http.get<IUser[]>(this.usersUrl + "/auth/login");
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
