import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscadorComponent } from './buscador/buscador.component';
import { HistorialComponent } from './historial/historial.component';


const routes: Routes = [
{path: "buscador" , component:BuscadorComponent},
{path: "historial" , component : HistorialComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
