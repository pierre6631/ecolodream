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

  public getUser(): string | null {
    return localStorage.getItem(USER_KEY);
  }
}
