import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioInterface } from '../models/usuario-interface';

@Injectable({
  providedIn: 'root',
})
export class Usuario {

  private http = inject(HttpClient);
  private apiURL = 'http://localhost:3000/usuarios';

  listarUsuarios(): Observable<UsuarioInterface[]> {

    return this.http.get<UsuarioInterface[]>(this.apiURL);

  }

  crearUsuario(usuario: UsuarioInterface): Observable<UsuarioInterface> {

    return this.http.post<UsuarioInterface>(this.apiURL, usuario);

  }

  actualizarUsuario(id: number, usuario: UsuarioInterface): Observable<UsuarioInterface> {

    return this.http.put<UsuarioInterface>(`${this.apiURL}/${id}`, usuario);

  }

  eliminarUsuario(id: number): Observable<void> {

    return this.http.delete<void>(`${this.apiURL}/${id}`);

  }
}
