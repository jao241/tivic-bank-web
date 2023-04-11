import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000';

  buscaSaldo(id: string): Observable<number> {
    const url = this.apiUrl + `/conta/verificar/${id}`;

    return this.http.get<number>(url);
  }

  realizaDeposito(id: string, valor: number): Observable<number> {
    const url = this.apiUrl + `/conta/depositar/${id}`;

    return this.http.put<number>(url, {
      valor,
    });
  }

  realizaSaque(id:string, valor: number): Observable<number | any> {
    const url = this.apiUrl + `/conta/sacar/${id}`;

    const dado = this.http.put<number>(url, {
      valor,
    }).pipe(
      catchError((error) => ([error]))
    )

    return dado;
  }
}
