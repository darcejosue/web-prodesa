import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Propiedad } from '../models/propiedad';

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {
  url = 'http://localhost:4000/api/propiedades/';
  constructor(private http: HttpClient) { }

  getPropiedades(): Observable<any> {
    return this.http.get(this.url);
  }
  eliminarPropiedad(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarPropiedad(propiedad: Propiedad): Observable<any> {
    return this.http.post(this.url, propiedad);
  }

  obtenerPropiedad(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

}
