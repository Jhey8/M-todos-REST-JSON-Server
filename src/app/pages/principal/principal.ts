import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-principal',
  standalone:true,
  imports: [RouterModule],
  templateUrl: './principal.html',
  styleUrl: './principal.css',
})
export class Principal {}
