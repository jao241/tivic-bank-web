import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:3000';

  buscaCliente(num_conta: string): Observable<any> {
    const url = this.apiUrl + `/cliente/${num_conta}`;

    return this.http.get<any>(url);
  }
}
