import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { IUser } from '../iuser';
import { Router } from '@angular/router';
import { environment } from 'environnement/environment';


const apiUrl = environment.apiUrl;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<IUser>;
  public user: Observable<IUser>;

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService, private router: Router) { 
    this.userSubject = new BehaviorSubject<IUser>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): IUser {
    return this.userSubject.value;
  }

  isLogged(){
    if(this.tokenStorage.getUser()){
      return true;
    }
    return false;
  }
  
  login(email: string, password: string): Observable<any> {
    return this.http
    .post<any>(apiUrl + '/auth/login', {email,password}, httpOptions)
    .pipe(
      map((data) => {
        let user: IUser = {
          id : data.user.id,
          email: email,
          token: data.accessToken,
          firstname: data.user.firstname,
          lastname: data.user.lastname,
          created_at: data.user.created_at
        };
        this.tokenStorage.saveUser(user);
        this.userSubject.next(user);
        return user;
      }));
  }

  register(lastname: string, firstname:string, email:string, password:string): Observable<any> {
    return this.http.post(apiUrl + '/users', {
      lastname, firstname, email, password
    }, httpOptions);
  }

  logout() {
    this.tokenStorage.removeUser();
    this.userSubject.next(null!);
  }
}
