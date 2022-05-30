import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { explaboral } from '../model/explaboral.model';
@Injectable({
  providedIn: 'root'
})
export class ExplaboralService {

  explaboralURL = 'http://localhost:8080/explaboral/'
  constructor(private httpClient: HttpClient) { }

  //obtener experiencia laboral con id=1
  public getExplaboral(): Observable<explaboral>{
    return this.httpClient.get<explaboral>(this.explaboralURL+ 'traer/1')
  }
  //crear una nueva experiencia
  public save(explaboral: explaboral): Observable<any>{
    return this.httpClient.post<any>(this.explaboralURL + 'crear', explaboral);
  }

  //actualizar/editar una nueva experiencia
  public edit(explaboral_id:number, explaboral: explaboral): Observable<any>{
  return this.httpClient.put<any>(this.explaboralURL + `editar/${explaboral_id}`, explaboral);
  }

  //eliminar una experiencia
  public delete(explaboral_id:number): Observable<any>{
    return this.httpClient.delete<any>(this.explaboralURL + `borrar/${explaboral_id}`);

  }
}
