import { Injectable } from '@angular/core';
import { IChallenge } from '../ichallenge';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environnement/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(private http: HttpClient,) { }

  getChallenges(categoryId: number|null): Observable<IChallenge[]> {
    let url = apiUrl + '/challenges';
    if(categoryId){
      url = apiUrl + '/challenges?category='+categoryId;
    }
    return this.http.get<{ data: IChallenge[] }>(url).pipe(
      map(response => response.data)
    );
  }

  getChallenge(id:number): Observable<IChallenge> {
    return this.http.get<{ data: IChallenge }>(apiUrl + '/challenges/'+id).pipe(
      map(response => response.data)
    );
  }
}
