import { Routes } from '@angular/router';
import { Principal } from './pages/principal/principal';
import { Clientes } from './pages/clientes/clientes';
import { Usuarios } from './pages/usuarios/usuarios';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/principal',
        pathMatch: 'full'
    },
    {
        path: "principal",
        component: Principal
    },
    {
        path: 'clientes',
        component: Clientes
    },
    {
        path: "usuarios",
        component: Usuarios
    }
];
