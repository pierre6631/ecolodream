import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environnement/environment';
import { ICategory } from '../icategory';
import { Observable, catchError, map, tap } from 'rxjs';


const apiUrl = environment.apiUrl;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient,) { }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<{ data: ICategory[] }>(apiUrl + '/categories').pipe(
      map(response => response.data)
    );
  }
}
