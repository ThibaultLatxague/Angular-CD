import { Injectable } from '@angular/core';
import { CD } from '../models/cd.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor(private http: HttpClient) {}

  getCDs(): Observable<CD[]> {
    console.log(this.http.get<CD[]>('http://localhost:3000/CD'));
    return this.http.get<CD[]>('http://localhost:3000/CD');
  }

  getCDById(id: number): Observable<CD> {
    console.log(this.http.get<CD>('http://localhost:3000/CD/' + id));
    return this.http.get<CD>('http://localhost:3000/CD/' + id);
  }

  addCd(nouvCd: CD): Observable<CD> {
    return this.getCDs().pipe(
      switchMap(cds =>
      {
      let maxId = 0;
      cds.forEach (cd => { maxId = (cd.id > maxId ? cd.id : maxId); } );
      nouvCd.id = maxId+1;
      return this.http.post<CD>('http://localhost:3000/CD', nouvCd);
      }
    ));
  }
}
