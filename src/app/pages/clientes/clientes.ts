import { Component, inject } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Cliente } from '../../services/cliente';

@Component({
  selector: 'app-clientes',
  standalone:true,
  imports: [],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes {

  private clienteService = inject(Cliente);

  clientes = this.clienteService.listarClientes();
}
