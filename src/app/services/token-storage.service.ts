import { Injectable } from '@angular/core';
import { IUser } from '../iuser';

const USER_KEY = 'currentUser';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  public removeUser(): void {
    localStorage.clear();
  }

  public saveUser(user: IUser): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): IUser | null {
    let user = localStorage.getItem(USER_KEY);
    if(user){
      return JSON.parse(user);
    }
    return null;
  }

  public getToken(): string | null{
    let user = this.getUser();
    if(user){
      return user.token
    }
    return null;
  }
}
