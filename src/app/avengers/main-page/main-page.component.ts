import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/avengers.interface';
import { PersonajesComponent } from '../../dbz/personajes/personajes.component';
import { AvengersService } from '../services/avengers.service';


@Component({
  selector: 'app-avengers-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {


  nuevo: Personaje={
    nombre:'Hulk',
    poder:9999999
  }

  // get avengers() :Personaje[]{
  //   return this.avengersService.listadoAvengers;
  // }

  //  agregarNuevoHeroe(argumento:Personaje){

  //    this.avengers.push(argumento);
  //  }
  /**
   *
   */
  constructor(private avengersService: AvengersService) {
 
  }

  }

