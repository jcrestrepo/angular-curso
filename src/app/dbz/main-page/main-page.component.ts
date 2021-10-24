import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.services';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {


  nuevo:Personaje = {
    nombre:'Maestro Roshi',
    poder:1000

  }
  
  // get personajes(): Personaje[] {
  //   return this.dbzServices.personajes;
  // }
  
  // agregarNuevoPersonaje(arg:Personaje){
  //   this.personajes.push(arg);
  // }

  constructor( ){

  }
  }
