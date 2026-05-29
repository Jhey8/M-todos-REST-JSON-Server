import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../services/usuario';
import { UsuarioInterface } from '../../models/usuario-interface';


@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios implements OnInit {

  private usuarioService = inject(Usuario);

  usuarios = signal<UsuarioInterface[]>([]);

  formUsuario: UsuarioInterface = {

    nombre: '',
    email: ''
  };

  editandoId: number | null = null;

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {

    this.usuarioService.listarUsuarios().subscribe({

      next: (data) => this.usuarios.set(data),
      error: (err) => console.error('Error al cargar usuarios!', err),

    });
  }

  guardarUsuario(): void {
    if (!this.formUsuario.nombre.trim() || !this.formUsuario.email.trim()) {
      alert('Por favor, completa todos los campos (nombre y email).');
      return;
    }

    if(this.editandoId === null){

      this.usuarioService.crearUsuario(this.formUsuario).subscribe(()=>{

        this.cargarUsuarios();
        this.limpiar();
      });

    }else{

      this.usuarioService.actualizarUsuario(this.editandoId, this.formUsuario).subscribe(()=>{

        this.cargarUsuarios();
        this.limpiar();
      })
    }
  }

  editarUsuario(u: UsuarioInterface): void{
    this.editandoId = u.id!,
    this.formUsuario = {

      nombre: u.nombre,
      email:u.email
    }

  }

  eliminarUsuario(id: number): void{

    this.usuarioService.eliminarUsuario(id).subscribe(() => {
       this.cargarUsuarios();
    })

  }

  limpiar(): void{
    this.formUsuario = {
      nombre: '',
      email: ''
    };

    this.editandoId = null;
  }






}
