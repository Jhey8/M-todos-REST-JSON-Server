import { Injectable } from '@angular/core';
import { ClienteModel } from '../models/cliente-model';

@Injectable({
  providedIn: 'root',
})
export class Cliente {

  private clientes: ClienteModel[] = [
    {
      id: 1,
      nombre: 'Ana Torres',
      correo: 'ana@gmail.com',
      edad: 25
    },
    {
      id: 2,
      nombre: 'Luis Peres',
      correo: 'luis@gmail.com',
      edad: 30
    },
    {
      id: 3,
      nombre: 'Maria López',
      correo: 'maria@gmail.com',
      edad: 28
    }

  ]

  constructor() { };

  listarClientes(): ClienteModel[] {
    return this.clientes;
  };



}
