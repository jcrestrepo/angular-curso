import { Component } from '@angular/core';
import { Personaje } from '../interfaces/avengers.interface';
import { AvengersService } from '../services/avengers.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent{
 
  // @Input() listadoAvengersComponente: Personaje[]=[];
 
  public get listadoAvengersComponente() : Personaje[] {
    return this.avengersService.avengers;
  }
   constructor(private avengersService: AvengersService) {
 
  }

}
