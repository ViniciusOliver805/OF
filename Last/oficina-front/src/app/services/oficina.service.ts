import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/config/api.config';
import { Oficina } from '../model/oficina';

@Injectable({
  providedIn: 'root'
})
export class OficinaService {

  constructor(private http: HttpClient) { }

  
  
  findAll(): Observable<Oficina[]> {
    return this.http.get<Oficina[]>(`${API_CONFIG.baseUrl}/oficina`);
  }

}
